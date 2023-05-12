import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { EntrepriseComponent } from './components/entreprise/entreprise.component';
import { InterimaireComponent } from './components/interimaire/interimaire.component';
import { AdminService } from './services/admin.service';


@NgModule({
  declarations: [
    EntrepriseComponent,
    InterimaireComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule
  ],
  providers:[
    AdminService
  ]
})
export class AdminModule { }
