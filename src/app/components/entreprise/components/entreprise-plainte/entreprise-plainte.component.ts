import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, map, takeUntil, tap } from 'rxjs';
import { AlertService } from 'src/app/shared/services/alert.service';
import { EntrepriseService } from '../../services/entreprise.service';
@Component({
  selector: 'app-entreprise-plainte',
  templateUrl: './entreprise-plainte.component.html',
  styleUrls: ['./entreprise-plainte.component.scss']
})
export class EntreprisePlainteComponent  implements OnInit, OnDestroy {
  Formulaire!: FormGroup;
  destroy$!: Subject<boolean>;
  defaultText = "ENREGISTRER";//Texte afficher par défaut dans le bouton de soumission
  patienter = "PATIENTER..."; //Afficher en cas de soumission
  stateButton: boolean= false; // Pour vérifier l'état du bouton de soumission

  constructor(
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute,
    private entrepriseService: EntrepriseService,

  ) { }

  ngOnInit(): void {
    this.entrepriseService.initSessionSotorage();
    this.destroy$ = new Subject<boolean>();
    this.initForm(); //Initialisation du Formulaire
  }

  private initForm() {
    this.Formulaire = this.formBuilder.group({
      motif: ["", Validators.required],
      description: ["", Validators.required],
    });
  }

  onSubmitForm(){
    this.stateButton= true;
    const formValue={
      "motif": this.Formulaire.value['motif'],
      "description": this.Formulaire.value['description'],
      "id_compte": this.entrepriseService.idCompte,
      "type_utilisateur": this.entrepriseService.type_utilisateur
      
    };

    this.entrepriseService.porterPlaine(formValue).pipe(
      takeUntil(this.destroy$),
      tap(
        (data) => {
          if (data["status"] == 200) {
            this.stateButton= false;
            this.alertService.succesToastr(data["message"]);
            setTimeout(() => {
              this.Formulaire.reset();
              this.Formulaire.markAsUntouched();
              this.Formulaire.markAsPristine();
            }, 1000);
          } else {
            this.stateButton= false;
            this.alertService.dangerToastr(data["message"]);
          }
        }
      )
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

}
