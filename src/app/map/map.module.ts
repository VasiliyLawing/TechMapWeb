import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EligibleStudentsListComponent} from "./eligible-students-list/eligible-students-list.component";
import {CompanyListComponent} from "./company-list/company-list.component";
import {ToastModule} from "primeng/toast";
import {TableModule} from "primeng/table";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";



@NgModule({
  declarations: [EligibleStudentsListComponent, CompanyListComponent],
  exports: [
    CompanyListComponent,
    EligibleStudentsListComponent
  ],
  imports: [
    CommonModule,
    ToastModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    CardModule
  ]
})
export class MapModule { }
