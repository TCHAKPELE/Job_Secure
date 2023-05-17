import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-fiche-dialogue',
  templateUrl: './fiche-dialogue.component.html',
  styleUrls: ['./fiche-dialogue.component.scss']
})
export class FicheDialogueComponent implements OnInit  {
  Formulaire!: FormGroup;
  formValue: any;
  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<FicheDialogueComponent>,
  ) { }

  ngOnInit(): void {
    this.initForm();
    
  }

  private initForm() {
    this.Formulaire = this.formBuilder.group({
      nbr_heures_effectuees: ["", Validators.required],

    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmitForm() {
    this.formValue = {
      'nbr_heures_effectuees': this.Formulaire.value['nbr_heures_effectuees'],

    };
    //On renvoie les données du formulaire au parent
    this.dialogRef.close(this.formValue);
  }
}
