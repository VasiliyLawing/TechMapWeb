import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditFieldsComponent } from './edit/edit-fields.component';
import { FieldTableComponent } from './table/field-table.component';
import {TableModule} from "primeng/table";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {RouterLink} from "@angular/router";



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
    RouterLink
  ],
  exports: [EditFieldsComponent, FieldTableComponent]
})
export class FieldModule { }
