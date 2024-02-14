// © 2024 Vasiliy Lawing
import {Component} from '@angular/core';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-manage-data',
  templateUrl: './manage-data.component.html',
  styleUrls: ['./manage-data.component.scss']
})
export class ManageDataComponent {

  activeIndex: number[] = []
  constructor (private dialogManager: DialogService) {

  }
  activeIndexController(): number[] {
    if (this.dialogManager.manageData) {
      this.activeIndex =  [];
    }

    return this.activeIndex
  }


}
