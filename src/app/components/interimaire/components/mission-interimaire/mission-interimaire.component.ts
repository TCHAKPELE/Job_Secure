import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, map, takeUntil, tap } from 'rxjs';
import { DatatableComponent } from 'src/app/shared/components/datatable/datatable.component';
import { MatSort } from '@angular/material/sort';
import { AlertService } from 'src/app/shared/services/alert.service';
import { MissionModel } from 'src/app/shared/models/mission.model';
import { InterimaireService } from '../../services/interimaire.service';
@Component({
  selector: 'app-mission-interimaire',
  templateUrl: './mission-interimaire.component.html',
  styleUrls: ['./mission-interimaire.component.scss']
})
export class MissionInterimaireComponent implements OnInit, OnDestroy{
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('datatable') datatable!: DatatableComponent; //Création d'une instance du component datatable ici

  destroy$!: Subject<boolean>;
  loading$: Observable<boolean>; //Vérifier que les données ont bien été chargé
  missions!: MissionModel[]; //Liste des missions

  /*---- Datatable -------*/
  columns: string[] = ['titre_offre', 'description_offre', 'salaire_offre', 'nom_entreprise', 'date_debut', 'date_fin', 'badges']; //Clé d'api
  displayedColumns: string[] = ['Titre', 'Description', 'Salaire (€)', 'Entreprise', 'Début', 'Fin', 'Status']; // Colonne à afficher dans la datatable



/*----Badge -----*/
  badges:  { code: number, label: string, color: string }[]=[
    {code : 0, label : 'cloturé', color:"danger"},
    {code : 1, label : 'en cours', color:"success"},
    {code : 2, label : 'suspendu', color:"warning"}
  ];
  //On doit préciser le nom de la colonne que porte le champs status, dans notre cas, status_mission
  //Car ce champs n'est pas renseigné dans la variable columns mais plutôt badges qui est renseigné
  columnStatusName : string ="status_mission";

  /*---- End badge ----*/
  labelDataTable: string = "Vos missions";
  /*------------End Datatable----------*/

  constructor(
    
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute,
    private interimaireService: InterimaireService,

  ) { }
  ngOnInit() {
    this.interimaireService.initSessionSotorage();
    this.destroy$ = new Subject<boolean>();
    this.getMissisons();
  }
    //Liste des missions 
    private getMissisons() {
      this.loading$ = this.interimaireService.loadingMission$
  
      this.interimaireService.missions$.pipe(
        takeUntil(this.destroy$),
        tap((data) => {
          this.missions = data;
        }
        )
      ).subscribe();
    }
      //Destruction des souscriptions
  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
