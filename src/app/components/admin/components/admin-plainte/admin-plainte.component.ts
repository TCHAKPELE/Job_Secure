import { AdminService } from './../../services/admin.service';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Observable, Subject, map, takeUntil, tap } from 'rxjs';
import { DatatableComponent } from 'src/app/shared/components/datatable/datatable.component';
import { MatSort } from '@angular/material/sort';
import { AlertService } from 'src/app/shared/services/alert.service'; 
import {MatDialog} from '@angular/material/dialog'; //Boite de dialogue
import { PlainteDialogComponent } from './dialogues/plainte-dialog/plainte-dialog.component';

@Component({
  selector: 'app-admin-plainte',
  templateUrl: './admin-plainte.component.html',
  styleUrls: ['./admin-plainte.component.scss']
})
export class AdminPlainteComponent implements OnInit, OnDestroy {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('datatable') datatable!: DatatableComponent; //Création d'une instance du component datatable ici
  destroy$!: Subject<boolean>;

  loading$: Observable<boolean>; //Vérifier que les données ont bien été chargé
  loadingPost: boolean= false; // S'active quand on envoie une requete poste nécéssitant l'envoi d'email
  plaintes! : any[]; //Liste des offres

  /*---- Datatable -------*/
  columns: string[] = ['nom','type_utilisateur', 'motif','description','date_creation', 'buttons']; //Clé d'api
  displayedColumns: string[]= ['Nom','Type utilisateur', 'Motif','Description', 'Date de création', '']; // Colonne à afficher dans la datatable


  buttonsAction: { label: string, color: string, action: (params: any) => void }[] = [
    { label: "Répondre", color: "primary", action: (plainte) => this.repondrePlainteDialog(plainte) },
  ]

  labelDataTable: string = "Liste des plaintes";

  constructor(
    private alertService: AlertService,
    private router: Router,
    private adminService: AdminService,
    public dialog: MatDialog
  ) { }
  ngOnInit(): void {
    this.adminService.initSessionSotorage();
    this.destroy$ = new Subject<boolean>();
    this.getOffres(); //Liste des offres
  }

  private getOffres(){

    this.loading$ = this.adminService.loadingPlainte$
 
    this.adminService.plaintes$.pipe(
      takeUntil(this.destroy$),
      tap((data) => {
        this.plaintes = data;
        
      }
      )
    ).subscribe();
    
  }

    //Boîte de dialogue de mise à jour d'une offre
    repondrePlainteDialog(element: any) {
      const dialogRef = this.dialog.open(PlainteDialogComponent, {
        width: '800px',
      });
      //Capture des données issues du formulaire de la boîte de dialog
      dialogRef.afterClosed().subscribe(result => {
        //Appel à la foncton de changement d'assignement
        this.repondrePlainte(element, result);
  
      });
    }

    repondrePlainte(element: any, result: any){
      this.loadingPost = true;
      this.adminService.reponsePlainte(result, element.id,)
      .pipe(
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
          }
        )
      ).subscribe();
      
    }
    //Destruction des souscriptions
    ngOnDestroy(): void {
      this.destroy$.next(true);
    }
}
