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

}
