import { CandidatureInterimaireResolver } from './resolvers/candidature-interimaire.resolver';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterimaireRoutingModule } from './interimaire-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { OffreIntermaireComponent } from './components/offre-intermaire/offre-intermaire.component';
import { InterimaireService } from './services/interimaire.service';
import { OffreInterimaireResolver } from './resolvers/offre-interimaire.resolver';
import { CandidatureInterimaireComponent } from './components/candidature-interimaire/candidature-interimaire.component';
import { MissionInterimaireComponent } from './components/mission-interimaire/mission-interimaire.component';
import { MissionInterimaireResolver } from './resolvers/mission-interimaire.resolver';
import { InterimaireFichePayeResolver } from './resolvers/interimaire-fiche-paye.resolver';
import { FicheDePayeInterimaireComponent } from './components/fiche-de-paye-interimaire/fiche-de-paye-interimaire.component';
import { InterimaireProfileComponent } from './components/interimaire-profile/interimaire-profile.component';
import { InterimaireProfileResolver } from './resolvers/interimaire-profile.resolver';
import { PlainteComponent } from './components/plainte/plainte.component';


@NgModule({
  declarations: [
    OffreIntermaireComponent,
    CandidatureInterimaireComponent,
    MissionInterimaireComponent,
    FicheDePayeInterimaireComponent,
    InterimaireProfileComponent,
    PlainteComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InterimaireRoutingModule
  ],
  providers: [
    InterimaireService,
    OffreInterimaireResolver,
    CandidatureInterimaireResolver,
    MissionInterimaireResolver,
    InterimaireFichePayeResolver,
    InterimaireProfileResolver
  ]
})
export class InterimaireModule { }
