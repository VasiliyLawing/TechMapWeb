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
import {StudentModule} from "./student/student.module";
import {CompanyModule} from "./company/company.module";
import {HeaderComponent} from "./header/header.component";
import {SidebarModule} from "primeng/sidebar";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {StyleClassModule} from "primeng/styleclass";
import {AvatarModule} from "primeng/avatar";
import {HeaderModule} from "./header/header.module";
import {SplitterModule} from "primeng/splitter";
import {PanelModule} from "primeng/panel";


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
        SidebarModule,
        ButtonModule,
        RippleModule,
        StyleClassModule,
        AvatarModule,
        HeaderModule,
        SplitterModule,
        PanelModule
    ],
  providers: [ httpInterceptorProviders, PermissionService, AuthService, StudentService, CompanyService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
