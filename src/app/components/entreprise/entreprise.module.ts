import { MissionResolver } from './resolvers/mission.resolver';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntrepriseRoutingModule } from './entreprise-routing.module';
import { OffreComponent } from './components/offre/offre.component';
import { EntrepriseService } from './services/entreprise.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { MissionComponent } from './components/mission/mission.component';
import { OffreResolver } from './resolvers/offre.resolver';
import { UpdateDialogueComponent } from './components/offre/dialogue/update-dialogue/update-dialogue.component';
import { CandidatureComponent } from './components/candidature/candidature.component';
import { CandidatureResolver } from './resolvers/candidature.resolver';


@NgModule({
  declarations: [
    OffreComponent,
    MissionComponent,
    UpdateDialogueComponent,
    CandidatureComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EntrepriseRoutingModule
  ],
  providers:[
    EntrepriseService,
    OffreResolver,
    CandidatureResolver,
    MissionResolver
  ]
})
export class EntrepriseModule { }
