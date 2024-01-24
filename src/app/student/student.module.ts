import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StudentComponent} from "./table/student.component";
import {EditStudentsComponent} from "./edit-students/edit-students.component";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    StudentComponent,
    EditStudentsComponent,
  ],
  exports: [
    StudentComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class StudentModule { }
