import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrepriseComponent } from './components/entreprise/entreprise.component';
import { CompteEntrepriseResolver } from './resolvers/compte-entreprise.resolver';
import { InterimaireComponent } from './components/interimaire/interimaire.component';
import { CompteInterimaireResolver } from './resolvers/compte-interimaire.resolver';
import { AdminOffreResolver } from './resolvers/admin-offre.resolver';
import { AdminOffreComponent } from './components/admin-offre/admin-offre.component';
import { AdminCandidatureComponent } from './components/admin-candidature/admin-candidature.component';
import { AdminCandidatureResolver } from './resolvers/admin-candidature.resolver';
import { AdminMissionComponent } from './components/admin-mission/admin-mission.component';
import { AdminMissionResolver } from './resolvers/admin-mission.resolver';
import { AdminPlainteComponent } from './components/admin-plainte/admin-plainte.component';
import { AdminPlainteResolver } from './resolvers/admin-plainte.resolver';

const routes: Routes = [
  {
    path:"",
    component: EntrepriseComponent,
    resolve: {entreprises: CompteEntrepriseResolver},
    data:{
      title: "Entreprises",
      breadcrumb: "Entreprises"
    }
  },
  {
    path:"entreprises",
    component: EntrepriseComponent,
    resolve: {entreprises: CompteEntrepriseResolver},
    data:{
      title: "Entreprises",
      breadcrumb: "Entreprises"
    }
  },
  {
    path:"entreprises/:statusDemande",
    component: EntrepriseComponent,
    resolve: {entreprises: CompteEntrepriseResolver},
    data:{
      title: "Entreprises",
      breadcrumb: "Entreprises"
    }
  },
  {
    path:"interimaires",
    component: InterimaireComponent,
    resolve: {interimaires: CompteInterimaireResolver},
    data:{
      title: "Intérimaires",
      breadcrumb: "Intérimaires"
    }
  },
  {
    path:"interimaires/:statusDemande",
    component: InterimaireComponent,
    resolve: {interimaires: CompteInterimaireResolver},
    data:{
      title: "Intérimaires",
      breadcrumb: "Intérimaires"
    }
  },
  {
    path:"offres",
    component: AdminOffreComponent,
    resolve: {offres: AdminOffreResolver},
    data:{
      title: "Offres",
      breadcrumb: "Offres"
    }
  },
  {
    path:"candidatures",
    component: AdminCandidatureComponent,
    resolve : {candidatures: AdminCandidatureResolver},
    data: {
      title: "Candidatures",
      breadcrumb: "Candidatures"
    }
  },
  {
    path:"candidatures/:id_offre/offre",
    component: AdminCandidatureComponent,
    resolve : {candidatures: AdminCandidatureResolver},
    data: {
      title: "Candidatures",
      breadcrumb: "Candidatures"
    }
  },
  {
    path:"missions",
    component: AdminMissionComponent,
    resolve : {missions: AdminMissionResolver},
    data: {
      title: "Missions",
      breadcrumb: "Missions"
    }
  },
  {
    path:"missions/:id_offre/offre",
    component: AdminMissionComponent,
    resolve : {missions: AdminMissionResolver},
    data: {
      title: "Missions",
      breadcrumb: "Missions"
    }
  },
  {
    path:"plaintes",
    component: AdminPlainteComponent,
    resolve : {plaintes: AdminPlainteResolver},
    data: {
      title: "Missions",
      breadcrumb: "Missions"
    }
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
