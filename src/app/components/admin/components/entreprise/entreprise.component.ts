import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, Subject, switchMap, takeUntil, tap } from "rxjs";
import { AlertService } from "src/app/shared/services/alert.service";
import { MatSort } from "@angular/material/sort";
import { DatatableComponent } from "src/app/shared/components/datatable/datatable.component";
import { EntrepriseModel } from "src/app/shared/models/entreprise.model";
import { AdminService } from "../../services/admin.service";
@Component({
  selector: "app-entreprise",
  templateUrl: "./entreprise.component.html",
  styleUrls: ["./entreprise.component.scss"],
})
export class EntrepriseComponent implements OnInit, OnDestroy {

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("datatable") datatable!: DatatableComponent; //Création d'une instance du component datatable ici

  destroy$!: Subject<boolean>;

  loading$: Observable<boolean>; //Vérifier que les données ont bien été chargé
  entreprises!: EntrepriseModel[]; //Liste des entreprises
  loadingPost: boolean= false; // S'active quand on envoie une requete poste nécéssitant l'envoi d'email
  afficherBoutonValiderCompte: boolean = false; //Détermine si on doit afficher le bouton valider compte ou pas
  afficherBoutonSupprimerCompte: boolean = false; //Détermine si on doit afficher le bouton supprimer compte ou pas

  /*---- Datatable -------*/
  columns: string[] = [
    "nom_entreprise",
    "email",
    "telephone_entreprise",
    "adresse_entreprise",
    "date_creation",

  ]; //Clé d'api
  displayedColumns: string[] = [
    "Nom entreprise",
    "Email",
    "Téléphone",
    "Adresse",
    "Date de création",

  ]; // Colonne à afficher dans la datatable
  
  // button de validation de compte et de suppression de compte
    buttonsAction0: {
      label: string;
      color: string;
      action: (params: any) => void;
    }[] = [
      {label: " Désactiver", color: "secondary", action: (entreprise) => this.desactiverEntreprise(entreprise) },
    ];

    buttonsAction1: {
      label: string;
      color: string;
      action: (params: any) => void;
    }[] = [
      {label: "Valider", color: "primary", action: (entreprise) => this.confirmEntreprise(entreprise) },
    ];
  labelDataTable: string = "Liste des entreprises";
  /*------------End Datatable----------*/

  constructor(
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute,
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    //Si un paramètre existe dans l'url, celà voudra dit qu'on veut afficher les comptes non validé,
    //on affiche donc le bouton valider et on modifie le texte label à afficher
    if (this.route.snapshot.params["statusDemande"]) {
      this.afficherBoutonValiderCompte = true;
      this.labelDataTable = this.labelDataTable + " non validé";

      // Ajoutez la colonne "buttons" aux tableaux si la condition est vérifiée
      //Bouton qui permettra de valider le compte
      this.columns.push("buttons");
      this.displayedColumns.push("");
      this.adminService.initSessionSotorage();
      this.destroy$ = new Subject<boolean>();
      this.getComptes();
    }
    else
    {
      this.afficherBoutonSupprimerCompte = true;
      this.columns.push("buttons");
      this.displayedColumns.push("");
      this.adminService.initSessionSotorage();
      this.destroy$ = new Subject<boolean>();
      this.getComptes();
    }

    
  }
  confirmEntreprise(element: EntrepriseModel): void {
    this.loadingPost = true;
    this.adminService.validerCompte({"id_utilisateur": element.id_user}).pipe(
      takeUntil(this.destroy$),
      tap(
        (data) =>{
          if (data["status"] == 200) {
            this.loadingPost = false;
            this.alertService.succesToastr(data["message"]);
            
            this.datatable.removeElement(element); //Suppresion de l'élément du datatable

          } else {
            this.loadingPost = false;
            this.alertService.dangerToastr(data["message"]);
          }
        },
        (error) => {
          this.loadingPost = false;
          this.alertService.dangerToastr("Impossible d'atteindre le serveur . Veuillez vérifier votre connexion internet, si celà persiste, veuillez contacter le support");
          console.log(error);
        }
      )
    ).subscribe();
    

  }
  //fonction pour supprimer un compte entreprise
  desactiverEntreprise(element: EntrepriseModel): void {
    this.loadingPost = true;
    this.adminService.desactiverCompte(element.email)
    .pipe(
      takeUntil(this.destroy$),
      tap( (data)=>{   
        if(data['status'] == 200){
          this.loadingPost = false;
          this.alertService.succesToastr(data['message']);
          
        }
        else{
          this.loadingPost = false;
         this.alertService.dangerToastr(data['message']);    
        }
      }),
    ).subscribe();

  }

  //Liste des comptes
  private getComptes() {
    this.loading$ = this.adminService.loadingEntreprise$;

    this.adminService.entreprises$
      .pipe(
        takeUntil(this.destroy$),
        tap((data) => {
          this.entreprises = data;
        })
      )
      .subscribe();
  }

  //Destruction des souscriptions
  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
