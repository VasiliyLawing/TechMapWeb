import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import {HttpClientModule} from "@angular/common/http";
import { ManageDataComponent } from './manage-data/manage-data.component';
import {CompanyComponent} from "./manage-data/tables/company/company.component";
import {StudentComponent} from "./manage-data/tables/student/student.component";
import {PanelComponent} from "./map/panel/panel.component";
import { EditCompaniesComponent } from './company/edit-companies/edit-companies.component';
import {FormsModule} from "@angular/forms";

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
    CompanyComponent,
    StudentComponent,
    PanelComponent,
    PanelComponent,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
