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
import {SidebarModule} from "primeng/sidebar";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {StyleClassModule} from "primeng/styleclass";
import {AvatarModule} from "primeng/avatar";
import {HeaderModule} from "./header/header.module";
import {SplitterModule} from "primeng/splitter";
import {PanelModule} from "primeng/panel";
import {TableModule} from "primeng/table";
import {SkeletonModule} from "primeng/skeleton";
import {CompanyListComponent} from "./map/company-list/company-list.component";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";
import { EligibleStudentsListComponent } from './map/eligible-students-list/eligible-students-list.component';
import {MapModule} from "./map/map.module";


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
        TableModule,
        SkeletonModule,
        ToastModule,
        MapModule
    ],
  providers: [ httpInterceptorProviders, PermissionService, AuthService, StudentService, CompanyService, MessageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
