import {Component, Input} from '@angular/core';
import {Company} from "../../company/company";
import {Student} from "../../student/student";

@Component({
  selector: 'app-eligible-students-list',
  templateUrl: './eligible-students-list.component.html',
  styleUrls: ['./eligible-students-list.component.scss']
})
export class EligibleStudentsListComponent {
  @Input("eligibleStudents") eligibleStudents: Student[] = []

  first = 0;

  rows = 5;

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  pageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }

  isLastPage(): boolean {
    return this.eligibleStudents ? this.first === this.eligibleStudents.length - this.rows : true;
  }

  isFirstPage(): boolean {
    return this.eligibleStudents ? this.first === 0 : true;
  }

}
