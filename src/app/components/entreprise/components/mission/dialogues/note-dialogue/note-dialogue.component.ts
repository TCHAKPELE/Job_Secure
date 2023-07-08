import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-note-dialogue',
  templateUrl: './note-dialogue.component.html',
  styleUrls: ['./note-dialogue.component.scss']
})
export class NoteDialogueComponent {
  Formulaire!: FormGroup;
  formValue: any;
  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<NoteDialogueComponent>,
  ) { }

  ngOnInit(): void {
    this.initForm();
    
  }

  private initForm() {
    this.Formulaire = this.formBuilder.group({
      note_interimaire: ["", Validators.required],

    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmitForm() {
    this.formValue = {
      'note': this.Formulaire.value['note_interimaire'],

    };
    //On renvoie les données du formulaire au parent
    this.dialogRef.close(this.formValue);
  }
}
