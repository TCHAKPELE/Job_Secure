import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EntrepriseService } from '../../services/entreprise.service';
import { Router } from '@angular/router';
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

  Formulaire!: FormGroup;
  destroy$!: Subject<boolean>;
  defaultText = "ENREGISTRER";//Texte afficher par défaut dans le bouton de soumission
  patienter = "PATIENTER..."; //Afficher en cas de soumission
  stateButton: boolean= false; // Pour vérifier l'état du bouton de soumission

  loading$: Observable<boolean>; //Vérifier que les données ont bien été chargé
  candidatures! : CandidatureModel[]; //Liste des offres
  
  /*---- Datatable -------*/
  columns: string[] = ['titre_offre','description_offre', 'salaire_offre','duree_offre','nom_interimaire','date_creation']; //Clé d'api
  displayedColumns: string[]= ['Titre','Description', 'Salaire (€)','Durée (en mois)','Nom candidat', 'Date de création']; // Colonne à afficher dans la datatable



  labelDataTable: string = "Liste des candidatures";
  isDataLoaded = false; //Vérifier si les données ont été chargées
  /*------------End Datatable----------*/

  constructor(
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private router: Router,
    private entrepriseService: EntrepriseService,

  ) { }

  ngOnInit(): void {
    this.entrepriseService.initSessionSotorage();
    this.destroy$ = new Subject<boolean>();
    this.getCandidatures();
 
  }

  private getCandidatures(){
    this.loading$ = this.entrepriseService.loadingCandidature$
 
    this.entrepriseService.candidatures$.pipe(
      takeUntil(this.destroy$),
      tap((data) => {
        this.candidatures = data;
        this.isDataLoaded = true;        
      }
      )
    ).subscribe();
  }
    //Destruction des souscriptions
    ngOnDestroy(): void {
      this.destroy$.next(true);
    }
}
