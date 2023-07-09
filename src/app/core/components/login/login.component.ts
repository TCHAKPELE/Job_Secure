import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil, tap } from 'rxjs';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from '../../models/user.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy{
  loginForm!: FormGroup;
  destroy$!: Subject<boolean>;
  connexion = "CONNEXION";
  patienter = "PATIENTER...";
  buttonText = this.connexion; //A afficher au niveau du template


  user!: UserModel;

  public appname: string= environment.app_name;
  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private toastrService: ToastrService) { }

  ngOnInit() {
    this.destroy$ = new Subject<boolean>;  //Destruction de la souscription
    

    this.initForm();
  }

  private initForm() {
    this.loginForm = this.formBuilder.group({
      identifiant: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // Alert appelé lorsque auth incorrecte
  dangerToastr(msg: string) {
    this.toastrService.error(msg, 'Erreur ', { progressBar: true });
  }
  onSubmitForm() {
    console.log(this.loginForm.value);
    this.buttonText = this.patienter;
    const formValue = {
      "identifiant": this.loginForm.value['identifiant'],
      "mot_de_passe": this.loginForm.value['password'],
      
    };

    this.loginService.verifyUser(formValue).pipe(
      takeUntil(this.destroy$), //Destruction de la soucription
      tap((data) => {
        if (data['status'] == 200) {

          this.user = data['user'];
          //Session storage
          if (typeof (sessionStorage) !== "undefined") { //Vérifie si le navigateur prend en compte sessionStorage
            sessionStorage.setItem('user', JSON.stringify(this.user));
          }

          this.loginService.addUserAuth(this.user); //Mettre l'utilisateur dans une variable globale
        
          
          this.redirect_user_to_account(this.user.type_utilisateur, this.user.activation_compte); //Redirection

        }
        else {
          this.buttonText = this.connexion;
          this.dangerToastr(data['message']);
        }

      },
      (error) => {
        this.buttonText = this.connexion;
        this.dangerToastr("Impossible d'atteindre le serveur d'authentification. Veuillez vérifier votre connexion internet, si celà persiste, veuillez contacter le support");
      }
      )
    ).subscribe();
  }

  //Redirection utilisateur

  private redirect_user_to_account(type_compte: string, activation_compte: number) {
    
    switch (type_compte) {
      
      case environment.interimaire:
        if(activation_compte == 1) this.router.navigateByUrl("interimaire/offres");
        else    this.router.navigateByUrl("validation-en-cours");

        break;

      case environment.entreprise:
        if(activation_compte == 1) this.router.navigateByUrl("dashboard/entreprise");
        else  this.router.navigateByUrl("validation-en-cours");
        break;

      case environment.admin:
        this.router.navigateByUrl("dashboard/admin");
        break;

      default:
        this.buttonText = this.connexion;
        this.dangerToastr("Impossible de rediriger vers l'espace correspondante. Veuillez joindre le support informatique");
        break;
    }
  }
  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
