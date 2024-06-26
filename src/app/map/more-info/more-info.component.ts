// © 2024 Vasiliy Lawing
import {Component, Input} from '@angular/core';
import {Company} from "../../company/company";

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.scss']
})
export class MoreInfoComponent {
  @Input("company") company!: Company


}
