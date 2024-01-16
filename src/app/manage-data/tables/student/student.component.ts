import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {Student} from "../../../student/student";
import {StudentService} from "../../../student/student.service";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
  imports: [
    NgForOf
  ],
  standalone: true
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
