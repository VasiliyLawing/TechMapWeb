import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './authentication/auth.interceptor';
import {ManageDataComponent} from "./manage-data/manage-data.component";
import {CompanyComponent} from "./company/table/company.component";
import {StudentComponent} from "./student/table/student.component";
import {PanelComponent} from "./map/panel/panel.component";
import {CompanyModule} from "./company/company.module";
import {StudentModule} from "./student/student.module";
import {PanelModule} from "./map/panel/panel.module";

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
    CompanyModule,
    StudentModule,
    PanelModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
