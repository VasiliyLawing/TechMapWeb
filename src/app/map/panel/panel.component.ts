import {Component, Input} from '@angular/core';
import {Student} from "../../student/student";

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {
  @Input("potentialStudents") potentialStudents: Student[] | undefined
}
