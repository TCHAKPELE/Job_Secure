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
import { CandidatureModel } from 'src/app/shared/models/candidature.model';

@Component({
  selector: 'app-admin-candidature',
  templateUrl: './admin-candidature.component.html',
  styleUrls: ['./admin-candidature.component.css']
})
export class AdminCandidatureComponent implements OnInit, OnDestroy {

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('datatable') datatable!: DatatableComponent; //Création d'une instance du component datatable ici
  destroy$!: Subject<boolean>;

  loading$: Observable<boolean>; //Vérifier que les données ont bien été chargé
  candidatures!: CandidatureModel[]; //Liste des candidatures

  /*---- Datatable -------*/
  columns: string[] = ['nom_entreprise', 'titre_offre', 'description_offre', 'salaire_offre', 'duree_offre', 'nom_interimaire', 'date_creation', 'buttons']; //Clé d'api
  displayedColumns: string[] = ['Nom entreprise', 'Titre', 'Description', 'Salaire (€)', 'Durée (en mois)', 'Nom candidat', 'Date de création', '']; // Colonne à afficher dans la datatable

  buttonsAction: { label: string, color: string, action: (params: any) => void }[] = [
    { label: "Supprimer", color: "danger", action: (candidature) => this.deleteCandidature(candidature) },
  ]

  labelDataTable: string = "Liste des candidatures";
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
    this.getCandidatures();

  }

  deleteCandidature(element: CandidatureModel): void {
    this.adminService.deleteCandidature(element.id).pipe(
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


  //Liste des candidatures 
  private getCandidatures() {
    this.loading$ = this.adminService.loadingCandidature$

    this.adminService.candidatures$.pipe(
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
