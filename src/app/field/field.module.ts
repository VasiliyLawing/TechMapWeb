// © 2024 Vasiliy Lawing
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditFieldsComponent} from './edit/edit-fields.component';
import {FieldTableComponent} from './table/field-table.component';
import {TableModule} from "primeng/table";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {RouterLink} from "@angular/router";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {DialogModule} from "primeng/dialog";
import {DropdownModule} from "primeng/dropdown";
import {FileUploadModule} from "primeng/fileupload";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import {ToastModule} from "primeng/toast";
import {ToolbarModule} from "primeng/toolbar";
import {ConfirmationService} from "primeng/api";
import { HeaderComponent } from '../header/header.component';


@NgModule({
  declarations: [
    EditFieldsComponent,
    FieldTableComponent
  ],
    imports: [
        CommonModule,
        TableModule,
        CardModule,
        ButtonModule,
        RouterLink,
        ConfirmDialogModule,
        DialogModule,
        DropdownModule,
        FileUploadModule,
        FormsModule,
        InputTextModule,
        RippleModule,
        ToastModule,
        ToolbarModule,
    ],
  exports: [EditFieldsComponent, FieldTableComponent],
  providers: [ConfirmationService]
})
export class FieldModule { }
