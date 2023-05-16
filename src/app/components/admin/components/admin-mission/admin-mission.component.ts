import { AdminService } from './../../services/admin.service';
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

@Component({
  selector: 'app-admin-mission',
  templateUrl: './admin-mission.component.html',
  styleUrls: ['./admin-mission.component.css']
})
export class AdminMissionComponent implements OnInit, OnDestroy {

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('datatable') datatable!: DatatableComponent; //Création d'une instance du component datatable ici

  destroy$!: Subject<boolean>;


  loading$: Observable<boolean>; //Vérifier que les données ont bien été chargé
  missions!: MissionModel[]; //Liste des missions

  /*---- Datatable -------*/
  columns: string[] = ['nom_entreprise','titre_offre', 'description_offre', 'salaire_offre', 'nom_interimaire', 'date_debut', 'date_fin', 'badges','actions']; //Clé d'api
  displayedColumns: string[] = ['Nom entreprise','Titre', 'Description', 'Salaire (€)', 'Nom intérimaire', 'Début', 'Fin', 'Status','']; // Colonne à afficher dans la datatable

  //Actions à exécuter (Explication dans le composant datatable)
  actions: {label : string, action: (params: any) => void}[]=[
    {label: "Supprimer", action: (mission) =>  this.deleteMission(mission)},

  ];

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
  labelDataTable: string = "Liste des missions";
  /*------------End Datatable----------*/

  constructor(
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute,
    private adminService: AdminService,

  ) { }

  ngOnInit(): void {
    this.adminService.initSessionSotorage();
    this.destroy$ = new Subject<boolean>();
    this.getMissisons();

  }

  //Liste des missions 
  private getMissisons() {
    this.loading$ = this.adminService.loadingMission$

    this.adminService.missions$.pipe(
      takeUntil(this.destroy$),
      tap((data) => {
        this.missions = data;
      }
      )
    ).subscribe();
  }

  deleteMission(element: any): void {
    this.adminService.deleteMission(element.id).pipe(
      takeUntil(this.destroy$),
      tap(
        (data) => {
          if (data["status"] == 200) {
            this.datatable.removeElement(element); //Suppresion de l'élément du datatable
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
