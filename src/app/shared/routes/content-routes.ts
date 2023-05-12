import { Routes } from '@angular/router';

export const content: Routes = [
  {
    path: "dashboard/entreprise",
    loadChildren: () => import("../../components/entreprise/entreprise.module").then((m)=>m.EntrepriseModule)
  },
  {
    path: "interimaire",
    loadChildren: () => import("../../components/interimaire/interimaire.module").then((m)=>m.InterimaireModule)
  },
  {
    path: "dashboard/admin",
    loadChildren: () => import("../../components/admin/admin.module").then((m)=>m.AdminModule)
  },
  {
    path: "error",
    loadChildren: () => import("../../pages/error-pages/error-pages.module").then((m)=>m.ErrorPagesModule)
  }
];