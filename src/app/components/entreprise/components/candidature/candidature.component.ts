import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EntrepriseService } from '../../services/entreprise.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import { AlertService } from 'src/app/shared/services/alert.service';
import { MatSort } from '@angular/material/sort';
import { DatatableComponent } from 'src/app/shared/components/datatable/datatable.component';
import { CandidatureModel } from 'src/app/shared/models/candidature.model';

@Component({
  selector: 'app-candidature',
  templateUrl: './candidature.component.html',
  styleUrls: ['./candidature.component.scss']
})
export class CandidatureComponent implements OnInit, OnDestroy{
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('datatable') datatable!: DatatableComponent; //Création d'une instance du component datatable ici

  destroy$!: Subject<boolean>;


  loading$: Observable<boolean>; //Vérifier que les données ont bien été chargé
  candidatures! : CandidatureModel[]; //Liste des candidatures
  
  /*---- Datatable -------*/
  columns: string[] = ['titre_offre','description_offre', 'salaire_offre','duree_offre','nom_interimaire','date_creation', 'buttons']; //Clé d'api
  displayedColumns: string[]= ['Titre','Description', 'Salaire (€)','Durée (en mois)','Nom candidat', 'Date de création','']; // Colonne à afficher dans la datatable

  buttonsAction: {label: string, color: string, action: (params:any) => void}[]=[
    {label: "Accepter", color: "primary", action: (candidature) => this.confirmCandidature(candidature) },
  ]

  labelDataTable: string = "Liste des candidatures";
  /*------------End Datatable----------*/

  constructor(
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute,
    private entrepriseService: EntrepriseService,

  ) { }

  ngOnInit(): void {
    this.entrepriseService.initSessionSotorage();
    this.destroy$ = new Subject<boolean>();
    this.getCandidatures();
 
  }

  //Accepter une candidature
  confirmCandidature(candidature: CandidatureModel){
    this.entrepriseService.accepterCandidature(candidature.id).pipe(
      takeUntil(this.destroy$),
      tap(
        (data) => {
          if (data["status"] == 200) {
            this.alertService.succesToastr(data["message"]);
        
          } else {
            this.alertService.dangerToastr(data["message"]);
          }
        },
        (error) => {
          this.alertService.dangerToastr("Impossible d'atteindre le serveur . Veuillez vérifier votre connexion internet, si celà persiste, veuillez contacter le support");
          console.log(error);
        }
      )
    ).subscribe();
    
  }
  
  //Liste des candidatures 
  private getCandidatures(){
    this.loading$ = this.entrepriseService.loadingCandidature$
 
    this.entrepriseService.candidatures$.pipe(
      takeUntil(this.destroy$),
      tap((data) => {
        this.candidatures = data;
      }
      )
    ).subscribe();
  }

 
    //Destruction des souscriptions
    ngOnDestroy(): void {
      this.destroy$.next(true);
    }
}
