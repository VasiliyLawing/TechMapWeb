import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentTableComponent} from "./table/student-table.component";
import {EditStudentsComponent} from "./edit-students/edit-students.component";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "primeng/api";
import {TableModule} from "primeng/table";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {RouterLink} from "@angular/router";
import {HeaderModule} from "../header/header.module";
import {InputTextModule} from "primeng/inputtext";
import {ToastModule} from "primeng/toast";
import {ToolbarModule} from "primeng/toolbar";
import {RippleModule} from "primeng/ripple";
import {FileUploadModule} from "primeng/fileupload";
import {TooltipModule} from "primeng/tooltip";
import {DialogModule} from "primeng/dialog";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {DropdownModule} from "primeng/dropdown";


@NgModule({
  declarations: [
    StudentTableComponent,
    EditStudentsComponent,
  ],
  exports: [
    StudentTableComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        TableModule,
        CardModule,
        ButtonModule,
        RouterLink,
        HeaderModule,
        InputTextModule,
        ToastModule,
        ToolbarModule,
        RippleModule,
        FileUploadModule,
        TooltipModule,
        DialogModule,
        ConfirmDialogModule,
        DropdownModule,
    ]
})
export class StudentModule { }
