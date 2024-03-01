import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor() { }
  manageData = false;

  toggleManageData() {
    this.manageData = !this.manageData
  }

}
