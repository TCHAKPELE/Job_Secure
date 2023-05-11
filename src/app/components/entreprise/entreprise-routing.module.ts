import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffreComponent } from './components/offre/offre.component';
import { OffreResolver } from './resolvers/offre.resolver';
import { CandidatureComponent } from './components/candidature/candidature.component';
import { CandidatureResolver } from './resolvers/candidature.resolver';
import { MissionComponent } from './components/mission/mission.component';
import { MissionResolver } from './resolvers/mission.resolver';

const routes: Routes = [
  {
    path:"",
    component: OffreComponent,
    resolve : {offres: OffreResolver},
    data: {
      title: "Offre",
      breadcrumb: "Offre"
    }
  },
  {
    path:"missions",
    component: MissionComponent,
    resolve : {missions: MissionResolver},
    data: {
      title: "Missions",
      breadcrumb: "Missions"
    }
  },
  {
    path:"missions/:id_offre/offre",
    component: MissionComponent,
    resolve : {missions: MissionResolver},
    data: {
      title: "Missions",
      breadcrumb: "Missions"
    }
  },
  {
    path:"candidatures",
    component: CandidatureComponent,
    resolve : {candidatures: CandidatureResolver},
    data: {
      title: "Candidatures",
      breadcrumb: "Candidatures"
    }
  },
  {
    path:"candidatures/:id_offre/offre",
    component: CandidatureComponent,
    resolve : {candidatures: CandidatureResolver},
    data: {
      title: "Candidatures",
      breadcrumb: "Candidatures"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntrepriseRoutingModule { }
