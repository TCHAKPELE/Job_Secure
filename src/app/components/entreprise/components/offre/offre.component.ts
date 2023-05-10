import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { EntrepriseService } from '../../services/entreprise.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Observable, Subject, map, takeUntil, tap } from 'rxjs';
import { OffreModel } from 'src/app/shared/models/offre.model';
import { DatatableComponent } from 'src/app/shared/components/datatable/datatable.component';
import { MatSort } from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog'; //Boite de dialogue
import { UpdateDialogueComponent } from './dialogue/update-dialogue/update-dialogue.component';
import { AlertService } from 'src/app/shared/services/alert.service';
@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.scss']
})
export class OffreComponent implements OnInit, OnDestroy {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('datatable') datatable!: DatatableComponent; //Création d'une instance du component datatable ici

  Formulaire!: FormGroup;
  destroy$!: Subject<boolean>;
  defaultText = "ENREGISTRER";//Texte afficher par défaut dans le bouton de soumission
  patienter = "PATIENTER..."; //Afficher en cas de soumission
  stateButton: boolean= false; // Pour vérifier l'état du bouton de soumission

  loadingOffre$: Observable<boolean>; //Vérifier que les données ont bien été chargé
  offres! : OffreModel[]; //Liste des offres

  /*---- Datatable -------*/
  columns: string[] = ['titre_offre','description_offre', 'salaire_offre','duree_offre','candidatures_count','date_creation', 'actions']; //Clé d'api
  displayedColumns: string[]= ['Titre','Description', 'Salaire (€)','Durée (en mois)','Candidature', 'Date de création', '']; // Colonne à afficher dans la datatable

  //Actions à exécuter (Explication dans le composant datatable)
  actions: {label : string, action: (params: any) => void}[]=[
    {label: "Supprimer", action: (offre) =>  this.deleteOffre(offre)},
    {label: "Modifier", action: (offre) => this.openUpdateDialog(offre)},
  ];

  labelDataTable: string = "Vos offres";
  isDataLoaded = false; //Vérifier si les données ont été chargées
  /*------------End Datatable----------*/
  constructor(
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private router: Router,
    private entrepriseService: EntrepriseService,
    public dialog: MatDialog
  ) { }



  ngOnInit(): void {
    this.entrepriseService.initSessionSotorage();
    this.destroy$ = new Subject<boolean>();
    this.initForm(); //Initialisation du Formulaire
    this.getOffres(); //Liste des offres
  }

  private initForm() {
    this.Formulaire = this.formBuilder.group({
      titre: ["", Validators.required],
      description: ["", Validators.required],
      duree: ["", Validators.required],
      salaire: ["", Validators.required],
    });
  }
//
  onSubmitForm() {
    this.stateButton = true;

    const formValue: OffreModel = {
      "titre_offre": this.Formulaire.value['titre'],
      "description_offre": this.Formulaire.value['description'],
      "duree_offre": this.Formulaire.value['duree'],
      "salaire_offre": this.Formulaire.value['salaire'],
      "id_entreprise": this.entrepriseService.idCompte,
    };

    this.entrepriseService
      .addOffre(formValue)
      .pipe(
        takeUntil(this.destroy$),
        tap(
          (data) => {
            if (data["status"] == 200) {
              this.stateButton = false;
              this.alertService.succesToastr(data["message"]);
              // Réinitialiser le formulaire et l'état de validation
              setTimeout(() => {
                this.Formulaire.reset();
                this.Formulaire.markAsUntouched();
                this.Formulaire.markAsPristine();
              }, 1000);
              this.datatable.addElement(data['data']);
            } else {
              this.stateButton = false;
              this.alertService.dangerToastr(data["message"]);
            }
          },
          (error) => {
            this.stateButton = false;
            this.alertService.dangerToastr("Impossible d'atteindre le serveur d'authentification. Veuillez vérifier votre connexion internet, si celà persiste, veuillez contacter le support");
            console.log(error);
          }
        )
      )
      .subscribe();
  }

  private getOffres(){

    this.loadingOffre$ = this.entrepriseService.loadingOffre$
 
    this.entrepriseService.offres$.pipe(
      takeUntil(this.destroy$),
      tap((data) => {
        this.offres = data;
        this.isDataLoaded = true;
        
      }
      )
    ).subscribe();
    
  }

  //Boîte de dialogue de mise à jour d'une offre

  //Boite de dialog contenant le formulaire de choix du nouveau professeur à assigner
  openUpdateDialog(element: OffreModel) {
    const dialogRef = this.dialog.open(UpdateDialogueComponent, {
      width: '800px',
      data: { titre: element.titre_offre, description: element.description_offre, salaire: element.salaire_offre, duree: element.duree_offre }
    });
    //Capture des données issues du formulaire de la boîte de dialog
    dialogRef.afterClosed().subscribe(result => {
      //Appel à la foncton de changement d'assignement
      this.updateOffre(element, result);

    });
  }
  //Mise à jour de l'offre
  updateOffre(oldElement : OffreModel, newElement: OffreModel){
    this.entrepriseService.updateOffre(oldElement.id!, newElement)
    .pipe(
      takeUntil(this.destroy$),
      tap(
        (data) => {
          if (data["status"] == 200) {
          
            this.alertService.succesToastr(data["message"]);
            this.datatable.updateElement(oldElement, newElement)
          } else {
         
            this.alertService.dangerToastr(data["message"]);
          }
        }
      )
    ).subscribe();
  }

  //Suppresion d'une offre
  deleteOffre(element: OffreModel){
    this.entrepriseService.deleteOffre(element.id!)
    .pipe(
      takeUntil(this.destroy$),
      tap( (data)=>{   
        if(data['status'] == 200){
          this.datatable.removeElement(element); //Suppresion de l'élément du datatable
          this.alertService.succesToastr(data['message']);
          
        }
        else{
         this.alertService.dangerToastr(data['message']);    
        }
      })
    ).subscribe();
  }





  //Destruction des souscriptions
  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
