import { AdminService } from './../../services/admin.service';
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
 
@Component({
  selector: 'app-admin-offre',
  templateUrl: './admin-offre.component.html',
  styleUrls: ['./admin-offre.component.css']
})
export class AdminOffreComponent implements OnInit, OnDestroy {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('datatable') datatable!: DatatableComponent; //Création d'une instance du component datatable ici
  destroy$!: Subject<boolean>;

  loading$: Observable<boolean>; //Vérifier que les données ont bien été chargé
  loadingPost: boolean= false; // S'active quand on envoie une requete poste nécéssitant l'envoi d'email
  offres! : OffreModel[]; //Liste des offres

  /*---- Datatable -------*/
  columns: string[] = ['titre_offre','description_offre', 'salaire_offre','duree_offre','candidatures_count','date_creation', 'actions']; //Clé d'api
  displayedColumns: string[]= ['Titre','Description', 'Salaire (€)','Durée (en mois)','Candidature', 'Date de création', '']; // Colonne à afficher dans la datatable

  //Actions à exécuter (Explication dans le composant datatable)
  actions: {label : string, action: (params: any) => void}[]=[
    {label: "Supprimer", action: (offre) =>  this.deleteOffre(offre)},
    {label: "Candidatures", action: (offre) => this.getCandidaturesByOffre(offre)},
    {label: "Missions", action: (offre) => this.getMissionsByOffre(offre)},
  ];
  labelDataTable: string = "Liste des offres";
  /*------------End Datatable----------*/
  constructor(
    private alertService: AlertService,
    private router: Router,
    private adminService: AdminService,
  ) { }


  ngOnInit(): void {
    this.adminService.initSessionSotorage();
    this.destroy$ = new Subject<boolean>();
    this.getOffres(); //Liste des offres
  }

  private getOffres(){

    this.loading$ = this.adminService.loadingOffre$
 
    this.adminService.offres$.pipe(
      takeUntil(this.destroy$),
      tap((data) => {
        this.offres = data;
        
      }
      )
    ).subscribe();
    
  }

  
  //Suppresion d'une offre
  deleteOffre(element: OffreModel){
    this.loadingPost = true;
    this.adminService.deleteOffre(element.id!)
    .pipe(
      takeUntil(this.destroy$),
      tap( (data)=>{   
        if(data['status'] == 200){
          this.loadingPost = false;
          this.datatable.removeElement(element); //Suppresion de l'élément du datatable
          this.alertService.succesToastr(data['message']);
          
        }
        else{
          this.loadingPost = false;
         this.alertService.dangerToastr(data['message']);    
        }
      })
    ).subscribe();
  }

  //Liste des candidatures par offres
  getCandidaturesByOffre(element: OffreModel){
    //On met le chemin absolu car cette fonction est appelé depuis datatable qui se trouve dans un autre module
    this.router.navigateByUrl(`dashboard/admin/candidatures/${element.id}/offre`); 
  }

    //Liste des missions par offres
    getMissionsByOffre(element: MissionModel){
      //On met le chemin absolu car cette fonction est appelé depuis datatable qui se trouve dans un autre module
      this.router.navigateByUrl(`dashboard/admin/missions/${element.id}/offre`); 
    }


  //Destruction des souscriptions
  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
