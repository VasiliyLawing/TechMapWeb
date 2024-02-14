// © 2024 Vasiliy Lawing
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MapComponent} from './map/map.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ManageDataComponent} from './manage-data/manage-data.component';
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
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";
import {MapModule} from "./map/map.module";
import {ChartModule} from "primeng/chart";
import {CardModule} from "primeng/card";
import {FieldModule} from "./field/field.module";
import { SettingsComponent } from './settings/settings.component';
import { FooterComponent } from './footer/footer.component';
import { TableSchoolsComponent } from './school/table/table.component';
import { EditSchoolsComponent } from './school/edit/edit.component';
import {InputTextModule} from "primeng/inputtext";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {DialogModule} from "primeng/dialog";
import {DropdownModule} from "primeng/dropdown";
import {FileUploadModule} from "primeng/fileupload";
import {ToolbarModule} from "primeng/toolbar";
import { ProfileComponent } from './profile/profile.component';
import {MultiSelectModule} from "primeng/multiselect";
import { AccordionModule } from 'primeng/accordion';


export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true }
];
@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ManageDataComponent,
    SettingsComponent,
    FooterComponent,
    TableSchoolsComponent,
    EditSchoolsComponent,
    ProfileComponent,
  ],
    imports: [
        AccordionModule,
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
        MapModule,
        ChartModule,
        CardModule,
        FieldModule,
        InputTextModule,
        ConfirmDialogModule,
        DialogModule,
        DropdownModule,
        FileUploadModule,
        ToolbarModule,
        MultiSelectModule
    ],
  providers: [ httpInterceptorProviders, PermissionService, AuthService, StudentService, CompanyService, MessageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
