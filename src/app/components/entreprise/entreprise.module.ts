import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntrepriseRoutingModule } from './entreprise-routing.module';
import { OffreComponent } from './components/offre/offre.component';
import { EntrepriseService } from './services/entreprise.service';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    OffreComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EntrepriseRoutingModule
  ],
  providers:[
    EntrepriseService
  ]
})
export class EntrepriseModule { }
