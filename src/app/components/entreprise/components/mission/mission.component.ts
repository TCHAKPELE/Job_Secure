import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EntrepriseService } from '../../services/entreprise.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import { AlertService } from 'src/app/shared/services/alert.service';
import { MatSort } from '@angular/material/sort';
import { DatatableComponent } from 'src/app/shared/components/datatable/datatable.component';
import { MissionModel } from 'src/app/shared/models/mission.model';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss']
})
export class MissionComponent implements OnInit, OnDestroy {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('datatable') datatable!: DatatableComponent; //Création d'une instance du component datatable ici

  destroy$!: Subject<boolean>;


  loading$: Observable<boolean>; //Vérifier que les données ont bien été chargé
  missions!: MissionModel[]; //Liste des missions

  /*---- Datatable -------*/
  columns: string[] = ['titre_offre', 'description_offre', 'salaire_offre', 'nom_interimaire', 'date_debut', 'date_fin', 'badges','actions']; //Clé d'api
  displayedColumns: string[] = ['Titre', 'Description', 'Salaire (€)', 'Nom intérimaire', 'Début', 'Fin', 'Status','']; // Colonne à afficher dans la datatable

  //Actions à exécuter (Explication dans le composant datatable)
  actions: {label : string, action: (params: any) => void}[]=[
    {label: "Cloturer", action: (mission) =>  this.cloturerMission(mission)},
    {label: "Suspendre", action: (mission) =>  this.suspendreMission(mission)},

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
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute,
    private entrepriseService: EntrepriseService,

  ) { }

  ngOnInit(): void {
    this.entrepriseService.initSessionSotorage();
    this.destroy$ = new Subject<boolean>();
    this.getMissisons();

  }

  //Liste des missions 
  private getMissisons() {
    this.loading$ = this.entrepriseService.loadingMission$

    this.entrepriseService.missions$.pipe(
      takeUntil(this.destroy$),
      tap((data) => {
        this.missions = data;
      }
      )
    ).subscribe();
  }

  cloturerMission(element : MissionModel){
    const status=0;
    this.entrepriseService.changerStatusMission(element.id, status).pipe(
      takeUntil(this.destroy$),
      tap(
        (data) =>{
          if (data["status"] == 200) {
            this.alertService.succesToastr(data["message"]);
            let newElement= element;
            newElement['status_mission']=0;
            this.datatable.updateElement(element,newElement);//Mise à jour du datatable
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

  suspendreMission(element: MissionModel){
    const status=2;
    this.entrepriseService.changerStatusMission(element.id, status).pipe(
      takeUntil(this.destroy$),
      tap(
        (data) =>{
          if (data["status"] == 200) {
            this.alertService.succesToastr(data["message"]);
            let newElement= element;
            newElement['status_mission']=2;
            this.datatable.updateElement(element,newElement);//Mise à jour du datatable
            
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
