import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-plainte-dialog',
  templateUrl: './plainte-dialog.component.html',
  styleUrls: ['./plainte-dialog.component.scss']
})
export class PlainteDialogComponent  implements OnInit {
  Formulaire!: FormGroup;
  formValue: any;

  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<PlainteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.initForm();
    
  }

  private initForm() {
    this.Formulaire = this.formBuilder.group({
      reponse: ['',Validators.required],

    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmitForm() {
    this.formValue = {
      'reponse': this.Formulaire.value['reponse'],

    };
    //On renvoie les données du formulaire au parent
    this.dialogRef.close(this.formValue);
  }
}
