import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InterimaireService } from '../../services/interimaire.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import { AlertService } from 'src/app/shared/services/alert.service';
import { InterimaireModel } from 'src/app/shared/models/interimaire.model';

@Component({
  selector: 'app-interimaire-profile',
  templateUrl: './interimaire-profile.component.html',
  styleUrls: ['./interimaire-profile.component.css']
})
export class InterimaireProfileComponent implements OnInit, OnDestroy {

  Formulaire!: FormGroup;
  destroy$!: Subject<boolean>;
  defaultText = "ENREGISTRER";//Texte afficher par défaut dans le bouton de soumission
  patienter = "PATIENTER..."; //Afficher en cas de soumission
  stateButton: boolean= false; // Pour vérifier l'état du bouton de soumission
  interimaire!: InterimaireModel[];
  loading$: Observable<boolean>; //Vérifier que les données ont bien été chargé
  constructor(
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute,
    private interimaireService: InterimaireService,

  ) { }

  ngOnInit() {
    this.interimaireService.initSessionSotorage();
    this.destroy$ = new Subject<boolean>;  //Destruction de la souscription
    this.getInfoProfile();

  }


  onSubmitForm(){
    this.stateButton= true;
    const formValue={
      "nom": this.Formulaire.value['nom'],
      "prenom": this.Formulaire.value['prenom'],
      "telephone_interimaire": this.Formulaire.value['telephone'],
      "adresse_interimaire": this.Formulaire.value['adresse'],
      "email": this.Formulaire.value['email'],
      "iban": this.Formulaire.value['iban'],
    };

    this.interimaireService.updateProfileInfo(formValue).pipe(
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
    this.loading$ = this.interimaireService.loadingProfile$
 
    this.interimaireService.profile$.pipe(
      takeUntil(this.destroy$),
      tap((data) => {
        
        this.interimaire = data;
        console.log(this.interimaire['id']);
        this.Formulaire = this.formBuilder.group({
          nom: [this.interimaire['nom'], Validators.required],
          prenom: [this.interimaire['prenom'], Validators.required],
          telephone: [this.interimaire['telephone_interimaire'], Validators.required],
          adresse: [this.interimaire['adresse_interimaire'], Validators.required],
          email: [this.interimaire['email'], Validators.required],
          iban: [this.interimaire['iban'], Validators.required],
         
        });
      }
      )
    ).subscribe();
    
  }

  
  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

}
