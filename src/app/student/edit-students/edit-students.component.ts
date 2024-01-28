import {Component, OnInit} from '@angular/core';

import {Student} from "../student";
import {StudentService} from "../student.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {FormControl, FormGroup, NgForm} from "@angular/forms";
import {Field} from "../../field/field";
import {FieldService} from "../../field/field.service";
import _default from "chart.js/dist/core/core.interaction";
import dataset = _default.modes.dataset;

@Component({
  selector: 'app-edit-students',
  templateUrl: './edit-students.component.html',
  styleUrls: ['./edit-students.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class EditStudentsComponent implements OnInit{
  dialog: boolean = false;

  students!: Student[];
  student!: Student;
  clonedProducts: { [s: string]: Student } = {};

  fields!: Field[]
  selectedField!: Field


  closeDialog() {
    this.dialog = false
  }

  constructor(private studentService: StudentService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private fieldService: FieldService) {}


  onRowEditInit(student: Student) {
    this.clonedProducts[student.id.toString() as string] = { ...student };

  }
  openNew() {
    this.dialog = true
  }


  onRowEditSave(student: Student) {
    this.studentService.updateStudent(student).subscribe(() => {
      this.getStudents()
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product is updated' });

    });

  }

  onRowEditCancel(student: Student, index: number) {
    this.students[index] = this.clonedProducts[student.id.toString() as string];
    delete this.clonedProducts[student.id.toString() as string];
  }



  ngOnInit() {
    this.getStudents()

    this.fieldService.findAll().subscribe(data => {
      this.fields = data
    })
  }

  getStudents() {
    this.studentService.findAll().subscribe(data => {
      this.students = data;
    });
  }




  addNewStudent(addForm: any) {

    addForm.value.field = this.selectedField;
    this.studentService.addStudent(addForm.value).subscribe(
        () => {

          this.getStudents()

        }, error => {
          console.log(error);
        })
  }




  deleteStudent(student: Student) {
    console.log("Clicked")
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + student.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.studentService.deleteStudent(student.id).subscribe(
            () => {
              this.getStudents()
            }
        )
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
      }
    });
  }



}
