import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import {Student} from "../student";
import {StudentService} from "../student.service";

@Component({
  selector: 'app-edit-students',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './edit-students.component.html',
  styleUrls: ['./edit-students.component.scss']
})
export class EditStudentsComponent implements OnInit{

  public students: Student[] = []
  public newStudent: Student | undefined


  addStudent = new FormGroup({
    name: new FormControl(''),
    longitude: new FormControl(''),
    latitude: new FormControl('')
  });

  addNewStudent(addForm: NgForm) {


    console.log(this.addStudent.value.name)
    this.studentService.addStudent(addForm.value).subscribe(
      (student: Student) => {

        this.getStudents()

      }, error => {
        console.log(error);
      })
  }
  public getStudents() {
    this.studentService.findAll().subscribe(data => {
      this.students = data;
    });
  }

  public deleteStudent(id: number) {
    this.studentService.deleteStudent(id).subscribe(
      () => {
        this.getStudents()
      }
    )
  }
  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.getStudents()

  }

  protected readonly name = name;
}
