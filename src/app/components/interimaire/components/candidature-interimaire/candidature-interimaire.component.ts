import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, map, takeUntil, tap } from 'rxjs';
import { OffreModel } from 'src/app/shared/models/offre.model';
import { DatatableComponent } from 'src/app/shared/components/datatable/datatable.component';
import { MatSort } from '@angular/material/sort';
import { AlertService } from 'src/app/shared/services/alert.service';
import { MissionModel } from 'src/app/shared/models/mission.model';
import { InterimaireService } from '../../services/interimaire.service';
import { CandidatureModel } from 'src/app/shared/models/candidature.model';

@Component({
  selector: 'app-candidature-interimaire',
  templateUrl: './candidature-interimaire.component.html',
  styleUrls: ['./candidature-interimaire.component.css']
})
export class CandidatureInterimaireComponent implements OnInit, OnDestroy{
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('datatable') datatable!: DatatableComponent; //Création d'une instance du component datatable ici

  destroy$!: Subject<boolean>;

  loading$: Observable<boolean>; //Vérifier que les données ont bien été chargé
  candidatures! : CandidatureModel[]; //Liste des candidatures
  
  /*---- Datatable -------*/
  columns: string[] = ['titre_offre','description_offre', 'salaire_offre','duree_offre','nom_entreprise','date_creation', 'badges']; //Clé d'api
  displayedColumns: string[]= ['Titre','Description', 'Salaire (€)','Durée (en mois)','Nom entreprise', 'Date de création','Status']; // Colonne à afficher dans la datatable



  /*----Badge -----*/
  badges:  { code: number, label: string, color: string }[]=[
    {code : 0, label : 'en attente', color:"primary"},
    {code : 1, label : 'accepté', color:"success"}
  ];
  //On doit préciser le nom de la colonne que porte le champs status, dans notre cas, status_acceptation
  //Car ce champs n'est pas renseigné dans la variable columns mais plutôt badges qui est renseigné
  columnStatusName : string ="status_acceptation";

  /*---- End badge ----*/

  labelDataTable: string = "Vos candidatures";
  /*------------End Datatable----------*/

  constructor(
    private interimaireService: InterimaireService,

  ) { }

  ngOnInit() {
    this.interimaireService.initSessionSotorage();
    this.destroy$ = new Subject<boolean>();
    this.getCandidatures();
  }
    //Liste des candidatures 
    private getCandidatures(){
      this.loading$ = this.interimaireService.loadingCandidature$
   
      this.interimaireService.candidatures$.pipe(
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
