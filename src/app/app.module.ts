import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { ManageDataComponent } from './manage-data/manage-data.component';
import {FormsModule} from "@angular/forms";
import {BasicAuthInterceptor} from "./auth/httpAuthInterceptor";
import {HttpErrorInterceptor} from "./auth/http-error.interceptor";
import {PermissionService} from "./auth/AuthGuard";
import {AuthService} from "./auth/auth.service";
import {StudentService} from "./student/student.service";
import {CompanyService} from "./company/company.service";
import {PanelModule} from "./map/panel/panel.module";
import {StudentModule} from "./student/student.module";
import {CompanyModule} from "./company/company.module";


export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true }
];
@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ManageDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PanelModule,
    StudentModule,
    CompanyModule,
    FormsModule,
  ],
  providers: [ httpInterceptorProviders, PermissionService, AuthService, StudentService, CompanyService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
