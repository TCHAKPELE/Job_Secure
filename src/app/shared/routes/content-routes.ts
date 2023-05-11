import { Routes } from '@angular/router';

export const content: Routes = [
  {
    path: "sample-page",
    loadChildren: () => import("../../components/sample-page/sample-page.module").then((m) => m.SamplePageModule),
  },
  {
    path: "sample-page3",
    loadChildren: () => import("../../components/sample-page3/sample-page3.module").then((m) => m.SamplePage3Module),
  },

  {
    path: "interimaire",
    loadChildren: () => import("../../components/interimaire/interimaire.module").then((m)=>m.InterimaireModule)
  },
  {
    path: "dashboard/entreprise",
    loadChildren: () => import("../../components/entreprise/entreprise.module").then((m)=>m.EntrepriseModule)
  },
  {
    path: "error",
    loadChildren: () => import("../../pages/error-pages/error-pages.module").then((m)=>m.ErrorPagesModule)
  }
];