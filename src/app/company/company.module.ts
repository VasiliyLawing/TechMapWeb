import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EditCompaniesComponent} from "./edit-companies/edit-companies.component";
import {CompanyComponent} from "./table/company/company.component";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [EditCompaniesComponent, CompanyComponent],
  exports: [
    CompanyComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CompanyModule { }
