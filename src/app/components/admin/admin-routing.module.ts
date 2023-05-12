import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrepriseComponent } from './components/entreprise/entreprise.component';

const routes: Routes = [
  {
    path:"",
    component: EntrepriseComponent,
    data:{
      title: "Entreprises",
      breadcrumb: "Entreprises"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
