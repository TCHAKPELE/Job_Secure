import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoaderComponent } from "./components/loader/loader.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { ContentLayoutComponent } from "./components/layout/content-layout/content-layout.component";
import { FullLayoutComponent } from "./components/layout/full-layout/full-layout.component";
import { FeatherIconsComponent } from "./components/feather-icons/feather-icons.component";
import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component";
import { BookmarkComponent } from "./components/bookmark/bookmark.component";
import { TranslateModule } from "@ngx-translate/core";
import { CustomizerComponent } from "./components/customizer/customizer.component";
import { DragulaModule } from "ng2-dragula";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { GalleryModule } from "@ks89/angular-modal-gallery";

// import "hammerjs";
// import "mousetrap";

// services
import { NavService } from "./services/nav.service";
import { CustomizerService } from "./services/customizer.service";
// Directives
import { HttpClient } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { ModuleWithProviders } from '@angular/core';
import { MaterialModule } from "./material.module";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [LoaderComponent, HeaderComponent, FooterComponent, SidebarComponent, BookmarkComponent, ContentLayoutComponent, FullLayoutComponent, FeatherIconsComponent, BreadcrumbComponent, CustomizerComponent],
  imports: [CommonModule, RouterModule, FormsModule, TranslateModule, DragulaModule.forRoot(), NgbModule, GalleryModule, MaterialModule],
  exports: [
    LoaderComponent, 
    FeatherIconsComponent, 
    TranslateModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [NavService, CustomizerService],
})
export class SharedModule {}
