import { Component, OnDestroy, OnInit } from '@angular/core';
import { EntrepriseService } from '../../services/entreprise.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Subject, takeUntil, tap } from 'rxjs';
import { OffreModel } from 'src/app/shared/models/offre.model';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.scss']
})
export class OffreComponent implements OnInit, OnDestroy {

  Formulaire!: FormGroup;
  destroy$!: Subject<boolean>;
  dedaultText = "ENREGISTRER";
  patienter = "PATIENTER...";
  buttonText = this.dedaultText; //A afficher au niveau du template

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private router: Router,
    private entrepriseService: EntrepriseService
  ) { }

  ngOnInit(): void {
    this.entrepriseService.initSessionSotorage();
    this.destroy$ = new Subject<boolean>();
    this.initForm(); //Initialisation du Formulaire
  }

  private initForm() {
    this.Formulaire = this.formBuilder.group({
      titre: ["", Validators.required],
      description: ["", Validators.required],
      duree: ["", Validators.required],
      salaire: ["", Validators.required],
    });
  }

  onSubmitForm() {
    console.log(this.entrepriseService.idCompte);

    this.buttonText = this.patienter;

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
              this.buttonText = this.dedaultText;
              this.succesToastr(data["message"]);
              // Réinitialiser le formulaire et l'état de validation
              setTimeout(() => {
                this.Formulaire.reset();
                this.Formulaire.markAsUntouched();
                this.Formulaire.markAsPristine();
              }, 1000);
              this.addElementToTop(data["data"]);
            } else {
              this.buttonText = this.dedaultText;
              this.dangerToastr(data["message"]);
            }
          },
          (error) => {
            this.buttonText = this.dedaultText;
            this.dangerToastr("Impossible d'atteindre le serveur d'authentification. Veuillez vérifier votre connexion internet, si celà persiste, veuillez contacter le support");
            console.log(error);
          }
        )
      )
      .subscribe();
  }

  //Ajouter un élément dans la datatable
  addElementToTop(element: any) {
    //A implémenter
  }

  private dangerToastr(msg: string) {
    this.toastrService.error(msg, "Erreur ", { progressBar: true });
  }
  private succesToastr(msg: string) {
    this.toastrService.success(msg, "Succès ", { progressBar: true });
  }

  //Destruction des souscriptions
  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
