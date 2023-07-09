import { NgModule } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";
import { ContentLayoutComponent } from "./shared/components/layout/content-layout/content-layout.component";
import { FullLayoutComponent } from "./shared/components/layout/full-layout/full-layout.component";
import { content } from "./shared/routes/content-routes";
import { full } from "./shared/routes/full.routes";
import { LoginComponent } from "./core/components/login/login.component";
import { Error404Component } from "./pages/error-pages/error404/error404.component";
import { RegisterComponent } from "./core/components/register/register.component";
import { RegisterEntrepriseComponent } from "./core/components/register-entreprise/register-entreprise.component";
import { SimpleComponent } from "./pages/coming-soon/simple/simple.component";
import { ValidationEnCoursComponent } from "./core/components/validation-en-cours/validation-en-cours.component";
import { PasswordChangeComponent } from "./core/components/password-change/password-change.component";
import { AuthGuard } from "./core/guards/auth.guard";
const routes: Routes = [
  {
    path :"",
    component: LoginComponent
  },
  {
    path :"login",
    component: LoginComponent
  },
  {
    path :"register",
    component: RegisterComponent
  },
  {
    path :"register-entreprise",
    component: RegisterEntrepriseComponent
  },
  {
    path :"validation-en-cours",
    component: ValidationEnCoursComponent
  },
  {
    path :"password-change",
    component: PasswordChangeComponent
  },

  {
    path: "",
    redirectTo: "sample-page/sample-page1",
    pathMatch: "full",
  },
  {
    path: "",
    component: ContentLayoutComponent,
    children: content,
    canActivate: [AuthGuard]
  },
  {
    path: "",
    component: FullLayoutComponent,
    children: full,
    canActivate: [AuthGuard]
  },
  {
    path: "**",
    component: Error404Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      anchorScrolling: "enabled",
      scrollPositionRestoration: "enabled",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
