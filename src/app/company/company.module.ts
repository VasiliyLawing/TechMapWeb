// © 2024 Vasiliy Lawing
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditCompaniesComponent} from "./edit/edit-companies.component";
import {CompanyTableComponent} from "./table/company-table.component";
import {FormsModule} from "@angular/forms";
import {TableModule} from "primeng/table";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {RouterLink} from "@angular/router";
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import {ToastModule} from "primeng/toast";
import {FileUploadModule} from "primeng/fileupload";
import {ToolbarModule} from "primeng/toolbar";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {DialogModule} from "primeng/dialog";
import {ListboxModule} from "primeng/listbox";
import {DropdownModule} from "primeng/dropdown";
import {MultiSelectModule} from "primeng/multiselect";
import { HeaderComponent } from '../header/header.component';


@NgModule({
  declarations: [EditCompaniesComponent, CompanyTableComponent],
  exports: [
    CompanyTableComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        TableModule,
        CardModule,
        ButtonModule,
        RouterLink,
        InputTextModule,
        RippleModule,
        ToastModule,
        FileUploadModule,
        ToolbarModule,
        ConfirmDialogModule,
        DialogModule,
        ListboxModule,
        DropdownModule,
        MultiSelectModule,
    ]
})
export class CompanyModule { }
