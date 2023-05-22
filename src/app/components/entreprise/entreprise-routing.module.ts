import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffreComponent } from './components/offre/offre.component';
import { OffreResolver } from './resolvers/offre.resolver';
import { CandidatureComponent } from './components/candidature/candidature.component';
import { CandidatureResolver } from './resolvers/candidature.resolver';
import { MissionComponent } from './components/mission/mission.component';
import { MissionResolver } from './resolvers/mission.resolver';
import { FicheDePayeEntrepriseComponent } from './components/fiche-de-paye-entreprise/fiche-de-paye-entreprise.component';
import { EntrepriseFichePayeResolver } from './resolvers/entreprise-fiche-paye.resolver';
import { EntrepriseProfileComponent } from './components/entreprise-profile/entreprise-profile.component';
import { EntrepriseProfileResolver } from './resolvers/entreprise-profile.resolver';
import { EntreprisePlainteComponent } from './components/entreprise-plainte/entreprise-plainte.component';

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
  },
  {
    path:"fiche_de_paye",
    component: FicheDePayeEntrepriseComponent,
    resolve : {fiche_de_payes: EntrepriseFichePayeResolver},
    data: {
      title: "Fiche de paye",
      breadcrumb: "Fiche de paye"
    }
  },
  {
    path:"profile",
    component: EntrepriseProfileComponent,
    resolve: {profile: EntrepriseProfileResolver},
    data: {
      title: "Profile",
      breadcrumb: "Profile"
    }
  },
  
  {
    path:"plainte",
    component: EntreprisePlainteComponent,
    data: {
      title: "Plainte",
      breadcrumb: "Plainte"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntrepriseRoutingModule { }
