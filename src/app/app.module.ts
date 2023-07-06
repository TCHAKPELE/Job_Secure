import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule, HttpLoaderFactory } from "./shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { ToastrModule } from "ngx-toastr";
import { DecimalPipe } from "@angular/common";

import { CookieService } from "ngx-cookie-service";
import "hammerjs";
import "mousetrap";
import { CoreModule } from "./core/core.module";
import { PasswordChangeComponent } from './core/components/password-change/password-change.component';
@NgModule({
  declarations: [AppComponent, PasswordChangeComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [CookieService, DecimalPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}