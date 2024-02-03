// © 2024 Vasiliy Lawing
import {Component, OnInit} from '@angular/core';
import {Student} from "../student";
import {StudentService} from "../student.service";

@Component({
  selector: 'app-student',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss'],
})
export class StudentTableComponent implements OnInit{
  public students: Student[] = []

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.studentService.findAll().subscribe(data => {
      this.students = data;
    });
  }
}
