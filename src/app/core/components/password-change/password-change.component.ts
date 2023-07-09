import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from '../../models/user.model';
import { environment } from 'src/environments/environment';
import { AlertService } from 'src/app/shared/services/alert.service';
import { PasswordChangeService } from '../../services/password-change.service';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.scss']
})
export class PasswordChangeComponent implements OnInit, OnDestroy {
  forgotForm!: FormGroup;
  destroy$!: Subject<boolean>;
  connexion = "VALIDEZ";
  patienter = "PATIENTER...";
  buttonText = this.connexion; //A afficher au niveau du template

  public appname: string= environment.app_name;
  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private updatePasswordService: PasswordChangeService,
    private alertService: AlertService,) { }

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
      this.forgotForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', [Validators.required, this.passwordValidator]],
        confirmPassword: ['', [Validators.required, this.passwordValidator]]
      });
    }
    onSubmitForm() {

      if(this.forgotForm.value['password'] != this.forgotForm.value['confirmPassword']){
        this.alertService.dangerToastr("Les deux mots de passe sont pas identique");
      }
      else{
        this.buttonText = this.patienter;

        const formValue = {
          "email": this.forgotForm.value['email'],
          "password": this.forgotForm.value['password'],
          
        };

        
    this.updatePasswordService.updatePassword(formValue).pipe(
      takeUntil(this.destroy$), //Destruction de la soucription
      tap((data) => {
        if (data['status'] == 200) {
          this.buttonText = this.connexion;
          this.alertService.succesToastr(data['message']);
          setTimeout(
            ()=> {
          this.router.navigateByUrl("login");
              
            },2000
          )

        }
        else {
          this.buttonText = this.connexion;
          this.alertService.dangerToastr(data['message']);
        }

      },
      (error) => {
        this.buttonText = this.connexion;
        this.alertService.dangerToastr("Impossible d'atteindre le serveur d'authentification. Veuillez vérifier votre connexion internet, si celà persiste, veuillez contacter le support");
      }
      )
    ).subscribe();
      }



    }
  
    ngOnDestroy(): void {
      this.destroy$.next(true);
    }
}
