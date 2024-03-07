// © 2024 Vasiliy Lawing
import {Component} from '@angular/core';
import { DialogService } from '../dialog.service';
import { UpdateDataService } from '../update-data.service';

@Component({
  selector: 'app-manage-data',
  templateUrl: './manage-data.component.html',
  styleUrls: ['./manage-data.component.scss']
})
export class ManageDataComponent {

  activeIndex: number[] = []
  constructor (private dialogManager: DialogService, private dataService: UpdateDataService) {

  }
  activeIndexController(): number[] {
    if (this.dialogManager.manageData) {
      this.activeIndex =  [];
    }

    return this.activeIndex
  }

  update() {
    this.dataService.update()
  }


}
