import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EntrepriseService } from '../../services/entreprise.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import { AlertService } from 'src/app/shared/services/alert.service';
import { EntrepriseModel } from 'src/app/shared/models/entreprise.model';

@Component({
  selector: 'app-entreprise-profile',
  templateUrl: './entreprise-profile.component.html',
  styleUrls: ['./entreprise-profile.component.css']
})
export class EntrepriseProfileComponent implements OnInit, OnDestroy {

  Formulaire!: FormGroup;
  destroy$!: Subject<boolean>;
  defaultText = "ENREGISTRER";//Texte afficher par défaut dans le bouton de soumission
  patienter = "PATIENTER..."; //Afficher en cas de soumission
  stateButton: boolean= false; // Pour vérifier l'état du bouton de soumission
  entreprise!: EntrepriseModel[];
  loading$: Observable<boolean>; //Vérifier que les données ont bien été chargé
  constructor(
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute,
    private entrepriseService: EntrepriseService,

  ) { }

  ngOnInit() {
    this.entrepriseService.initSessionSotorage();
    this.destroy$ = new Subject<boolean>;  //Destruction de la souscription
    this.getInfoProfile();

    //this.initForm();
  }


  onSubmitForm(){
    this.stateButton= true;
    const formValue={
      "nom_entreprise": this.Formulaire.value['nom'],
      "telephone_entreprise": this.Formulaire.value['telephone'],
      "adresse_entreprise": this.Formulaire.value['adresse'],
      "email": this.Formulaire.value['email'],
    };

    this.entrepriseService.updateProfileInfo(formValue).pipe(
      takeUntil(this.destroy$),
      tap(
        (data) => {
          if (data["status"] == 200) {
            this.stateButton= false;
            this.alertService.succesToastr(data["message"]);
            
          } else {
            this.stateButton= false;
            this.alertService.dangerToastr(data["message"]);
          }
        }
      )
    ).subscribe();
  }

  getInfoProfile(){
    this.loading$ = this.entrepriseService.loadingProfile$
 
    this.entrepriseService.profile$.pipe(
      takeUntil(this.destroy$),
      tap((data) => {
        
        this.entreprise = data;
        this.Formulaire = this.formBuilder.group({
          nom: [this.entreprise['nom_entreprise'], Validators.required],
          telephone: [this.entreprise['telephone_entreprise'], Validators.required],
          adresse: [this.entreprise['adresse_entreprise'], Validators.required],
          email: [this.entreprise['email'], Validators.required],
         
        });
      }
      )
    ).subscribe();
    
  }

  
  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

}
