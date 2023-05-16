import { AlertService } from './../../../shared/services/alert.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { Subject, takeUntil, tap } from 'rxjs';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  Formulaire!: FormGroup;
  destroy$!: Subject<boolean>;
  defaultText = "ENREGISTRER";//Texte afficher par défaut dans le bouton de soumission
  patienter = "PATIENTER..."; //Afficher en cas de soumission
  stateButton: boolean = false; // Pour vérifier l'état du bouton de soumission
  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private registerService: RegisterService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.destroy$ = new Subject<boolean>;  //Destruction de la souscription


    this.initForm();
  }
  private initForm() {
    this.Formulaire = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      telephone: ['', Validators.required],
      adresse: ['', Validators.required],
      email: ['', Validators.required],
      mot_de_passe: ['', Validators.required]
    });
  }

  onSubmitForm() {
    this.stateButton = true;
    const formValue = {
      "nom": this.Formulaire.value['nom'],
      "prenom": this.Formulaire.value['prenom'],
      "email": this.Formulaire.value['email'],
      "adresse_interimaire": this.Formulaire.value['adresse'],
      "telephone_interimaire": this.Formulaire.value['telephone'],
      "mot_de_passe": this.Formulaire.value['mot_de_passe'],
    };
    this.registerService.addInterimaire(formValue)
      .pipe(
        takeUntil(this.destroy$), //Destruction de la soucription
        tap((data) => {
          if (data['status'] == 200) {
            this.alertService.succesToastr(data['message']);
          }
          else {
            this.stateButton = false;
            this.alertService.dangerToastr(data['message']);
          }


        },
        (error) => {
          this.stateButton= false;
          this.alertService.dangerToastr("Impossible d'atteindre le serveur. Veuillez vérifier votre connexion internet, si celà persiste, veuillez contacter le support");
        }
        )
      ).subscribe();

  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
