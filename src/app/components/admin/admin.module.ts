import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { EntrepriseComponent } from './components/entreprise/entreprise.component';
import { InterimaireComponent } from './components/interimaire/interimaire.component';
import { AdminService } from './services/admin.service';
import { CompteEntrepriseResolver } from './resolvers/compte-entreprise.resolver';
import { CompteInterimaireResolver } from './resolvers/compte-interimaire.resolver';
import { AdminOffreComponent } from './components/admin-offre/admin-offre.component';
import { AdminOffreResolver } from './resolvers/admin-offre.resolver';
import { AdminCandidatureComponent } from './components/admin-candidature/admin-candidature.component';
import { AdminCandidatureResolver } from './resolvers/admin-candidature.resolver';
import { AdminMissionComponent } from './components/admin-mission/admin-mission.component';
import { AdminMissionResolver } from './resolvers/admin-mission.resolver';


@NgModule({
  declarations: [
    EntrepriseComponent,
    InterimaireComponent,
    AdminOffreComponent, 
    AdminCandidatureComponent,
    AdminMissionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule
  ],
  providers:[
    AdminService,
    CompteEntrepriseResolver,
    CompteInterimaireResolver,
    AdminOffreResolver,
    AdminCandidatureResolver,
    AdminMissionResolver
  ]
})
export class AdminModule { }
