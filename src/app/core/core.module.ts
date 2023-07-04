import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './components/register/register.component';
import { RegisterEntrepriseComponent } from './components/register-entreprise/register-entreprise.component';
import { RouterModule } from '@angular/router';
import { ValidationEnCoursComponent } from './components/validation-en-cours/validation-en-cours.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RegisterEntrepriseComponent,
    ValidationEnCoursComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    LoginComponent
  ],
  providers: [LoginService],
})
export class CoreModule { }