import { AlertService } from './../../../shared/services/alert.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { Subject, takeUntil, tap } from 'rxjs';
import { RegisterService } from '../../services/register.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register-entreprise',
  templateUrl: './register-entreprise.component.html',
  styleUrls: ['./register-entreprise.component.scss']
})
export class RegisterEntrepriseComponent implements OnInit, OnDestroy{
  Formulaire!: FormGroup;
  destroy$!: Subject<boolean>;
  defaultText = "ENREGISTRER";//Texte afficher par défaut dans le bouton de soumission
  patienter = "PATIENTER..."; //Afficher en cas de soumission
  stateButton: boolean = false; // Pour vérifier l'état du bouton de soumission

  public appname: string= environment.app_name;
  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private registerService: RegisterService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.destroy$ = new Subject<boolean>;  //Destruction de la souscription


    this.initForm();
  }
  private passwordValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.value;
    // Vérifier si le mot de passe a au moins 6 caractères
    if (password && password.length < 6) {
      return { 'minlength': true };
    }
    // Vérifier si le mot de passe contient un mélange de chiffres et de lettres
    if (password && !/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
      return { 'mixofcharacters': true };
    }
    return null;
  }
  private initForm() {
    this.Formulaire = this.formBuilder.group({
      nom: ['', Validators.required],
      telephone: ['', Validators.required],
      adresse: ['', Validators.required],
      email: ['', Validators.required],
      mot_de_passe: ['', [Validators.required, this.passwordValidator]]
    });
  }

  onSubmitForm() {
    this.stateButton = true;
    const formValue = {
      "nom_entreprise": this.Formulaire.value['nom'],
      "email": this.Formulaire.value['email'],
      "adresse_entreprise": this.Formulaire.value['adresse'],
      "telephone_entreprise": this.Formulaire.value['telephone'],
      "mot_de_passe": this.Formulaire.value['mot_de_passe'],
    };
    this.registerService.addEntreprise(formValue)
      .pipe(
        takeUntil(this.destroy$), //Destruction de la soucription
        tap((data) => {
          if (data['status'] == 200) {
            this.alertService.succesToastr(data['message']);
            this.router.navigateByUrl("login");
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
