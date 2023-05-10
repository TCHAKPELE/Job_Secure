import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject, takeUntil, Observable, map, tap } from 'rxjs';
import { EntrepriseService } from 'src/app/components/entreprise/services/entreprise.service';
@Component({
  selector: 'app-update-dialogue',
  templateUrl: './update-dialogue.component.html',
  styleUrls: ['./update-dialogue.component.scss']
})
export class UpdateDialogueComponent implements OnInit {
  Formulaire!: FormGroup;
  formValue: any;

  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<UpdateDialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.initForm();
    
  }

  private initForm() {
    this.Formulaire = this.formBuilder.group({
      titre: [this.data.titre, Validators.required],
      description: [this.data.description, Validators.required],
      duree: [this.data.duree, Validators.required],
      salaire: [this.data.salaire, Validators.required],
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmitForm() {
    this.formValue = {
      'titre_offre': this.Formulaire.value['titre'],
      'description_offre': this.Formulaire.value['description'],
      'duree_offre': this.Formulaire.value['duree'],
      'salaire_offre': this.Formulaire.value['salaire'],

    };
    //On renvoie les données du formulaire au parent
    this.dialogRef.close(this.formValue);
  }

}
