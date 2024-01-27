import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EditCompaniesComponent} from "./edit-companies/edit-companies.component";
import {CompanyComponent} from "./table/company/company.component";
import {FormsModule} from "@angular/forms";
import {TableModule} from "primeng/table";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {RouterLink} from "@angular/router";
import {HeaderModule} from "../header/header.module";
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import {ToastModule} from "primeng/toast";



@NgModule({
  declarations: [EditCompaniesComponent, CompanyComponent],
  exports: [
    CompanyComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        TableModule,
        CardModule,
        ButtonModule,
        RouterLink,
        HeaderModule,
        InputTextModule,
        RippleModule,
        ToastModule
    ]
})
export class CompanyModule { }
