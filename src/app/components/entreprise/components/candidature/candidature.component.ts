import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EntrepriseService } from '../../services/entreprise.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import { AlertService } from 'src/app/shared/services/alert.service';
import { MatSort } from '@angular/material/sort';
import { DatatableComponent } from 'src/app/shared/components/datatable/datatable.component';
import { CandidatureModel } from 'src/app/shared/models/candidature.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-candidature',
  templateUrl: './candidature.component.html',
  styleUrls: ['./candidature.component.scss']
})
export class CandidatureComponent implements OnInit, OnDestroy{
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('datatable') datatable!: DatatableComponent; //Création d'une instance du component datatable ici

  destroy$!: Subject<boolean>;

  cvPath = `${environment.filePath}/cv/`; //Url du cv
  loading$: Observable<boolean>; //Vérifier que les données ont bien été chargé
  candidatures! : CandidatureModel[]; //Liste des candidatures
  loadingPost: boolean= false; // S'active quand on envoie une requete poste nécéssitant l'envoi d'email
  /*---- Datatable -------*/
  columns: string[] = ['titre_offre','description_offre', 'salaire_offre','duree_offre','nom_interimaire','note_interimaire', 'buttons']; //Clé d'api
  displayedColumns: string[]= ['Titre','Description', 'Salaire (€)','Durée (en mois)','Candidat', 'Note','']; // Colonne à afficher dans la datatable

  buttonsAction: {label: string, color: string, action: (params:any) => void}[]=[
    {label: "CV", color: "success", action: (candidature) => this.voirCvCandidat(candidature) },
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

  voirCvCandidat(candidature: CandidatureModel){
    window.open(this.cvPath +candidature.cv_interimaire, '_blank');
  }
  //Accepter une candidature
  confirmCandidature(candidature: CandidatureModel){
    this.loadingPost = true;
    this.entrepriseService.accepterCandidature(candidature.id).pipe(
      takeUntil(this.destroy$),
      tap(
        (data) => {
          if (data["status"] == 200) {
            this.loadingPost = false;
            this.alertService.succesToastr(data["message"]);
        
          } else {
            this.loadingPost = false;
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
