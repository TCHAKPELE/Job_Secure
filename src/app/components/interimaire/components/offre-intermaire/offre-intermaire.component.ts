import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Observable, Subject, map, takeUntil, tap } from 'rxjs';
import { OffreModel } from 'src/app/shared/models/offre.model';
import { DatatableComponent } from 'src/app/shared/components/datatable/datatable.component';
import { MatSort } from '@angular/material/sort';
import { AlertService } from 'src/app/shared/services/alert.service';
import { MissionModel } from 'src/app/shared/models/mission.model';
import { InterimaireService } from '../../services/interimaire.service';

@Component({
  selector: 'app-offre-intermaire',
  templateUrl: './offre-intermaire.component.html',
  styleUrls: ['./offre-intermaire.component.scss']
})
export class OffreIntermaireComponent implements OnInit, OnDestroy {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('datatable') datatable!: DatatableComponent; //Création d'une instance du component datatable ici

  destroy$!: Subject<boolean>;
  loadingOffre$: Observable<boolean>; //Vérifier que les données ont bien été chargé
  offres!: OffreModel[]; //Liste des offres

  /*---- Datatable -------*/
  columns: string[] = ['nom_entreprise','titre_offre', 'description_offre', 'salaire_offre', 'duree_offre', 'date_creation', 'buttons']; //Clé d'api
  displayedColumns: string[] = ['Non entreprise', 'Titre', 'Description', 'Salaire (€)', 'Durée (en mois)', 'Date de création', '']; // Colonne à afficher dans la datatable

  //Actions à exécuter (Explication dans le composant datatable)
  actions: { label: string, action: (params: any) => void }[] = [

  ];

  buttonsAction: {label: string, color: string, action: (params:any) => void}[]=[
    {label: "Postuler", color: "primary", action: (offre) => this.postulerOffre(offre) },
  ];

  labelDataTable: string = "Liste des  offres";

  /*------------End Datatable----------*/
  constructor(
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private router: Router,
    private interimaireService: InterimaireService,

  ) { }

  ngOnInit(): void {
    this.interimaireService.initSessionSotorage();
    this.destroy$ = new Subject<boolean>();
    this.getOffres(); //Liste des offres
  }

  //Liste des offres
  private getOffres() {
    this.loadingOffre$ = this.interimaireService.loadingOffre$
    this.interimaireService.offres$.pipe(
      takeUntil(this.destroy$),
      tap((data) => {
        this.offres = data;

      }
      )
    ).subscribe();

  }

  //Candidater

  postulerOffre(element: OffreModel){
    const formValue={
      "id_entreprise": element.id_entreprise,
      "id_interimaire": this.interimaireService.idCompte,
      "id_offre": element.id
    };
    this.interimaireService.postulerCandidature(formValue).pipe(
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

  //Destruction des souscriptions
  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
