import {Component, OnInit} from '@angular/core';
import {Student} from "../student";
import {StudentService} from "../student.service";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit{
  public students: Student[] = []

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.studentService.findAll().subscribe(data => {
      this.students = data;
    });
  }
}
