import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffreComponent } from './components/offre/offre.component';

const routes: Routes = [
  {
    path:"",
    component: OffreComponent,
    data: {
      title: "Offre",
      breadcrumb: "Offre"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntrepriseRoutingModule { }
