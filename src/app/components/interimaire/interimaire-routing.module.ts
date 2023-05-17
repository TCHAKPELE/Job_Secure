import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffreIntermaireComponent } from './components/offre-intermaire/offre-intermaire.component';
import { OffreInterimaireResolver } from './resolvers/offre-interimaire.resolver';
import { CandidatureInterimaireComponent } from './components/candidature-interimaire/candidature-interimaire.component';
import { CandidatureInterimaireResolver } from './resolvers/candidature-interimaire.resolver';
import { MissionInterimaireComponent } from './components/mission-interimaire/mission-interimaire.component';
import { MissionInterimaireResolver } from './resolvers/mission-interimaire.resolver';
import { FicheDePayeInterimaireComponent } from './components/fiche-de-paye-interimaire/fiche-de-paye-interimaire.component';
import { InterimaireFichePayeResolver } from './resolvers/interimaire-fiche-paye.resolver';

const routes: Routes = [
  {
    path:"",
    component: OffreIntermaireComponent,
    resolve: {offres: OffreInterimaireResolver},
    data: {
      title: "Offres",
      breadcrumb: "Offres"
    }
  },
  {
    path:"offres",
    component: OffreIntermaireComponent,
    resolve: {offres: OffreInterimaireResolver},
    data: {
      title: "Offres",
      breadcrumb: "Offres"
    }
  },
  {
    path:"candidatures",
    component: CandidatureInterimaireComponent,
    resolve: {candidatures: CandidatureInterimaireResolver},
    data: {
      title: "Candidatures",
      breadcrumb: "Candidatures"
    }
  },
  {
    path:"missions",
    component: MissionInterimaireComponent,
    resolve: {missions: MissionInterimaireResolver},
    data: {
      title: "Missions",
      breadcrumb: "Missions"
    }
  },
  {
    path:"fiche_de_paye",
    component: FicheDePayeInterimaireComponent,
    resolve : {fiche_de_payes: InterimaireFichePayeResolver},
    data: {
      title: "Fiche de paye",
      breadcrumb: "Fiche de paye"
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterimaireRoutingModule { }
