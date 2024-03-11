import {Component, OnInit} from '@angular/core';
import {School} from "../school";
import {SchoolService} from "../school.service";
import { UpdateDataService } from 'src/app/update-data.service';

@Component({
  selector: 'app-table-schools',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableSchoolsComponent implements OnInit {

  schools!: School[]

  constructor(public schoolService: SchoolService, private updateService: UpdateDataService) {
  }

  ngOnInit(): void {
    this.updateService.initSchoolsComponent(this)


    this.schoolService.findAll().subscribe(data => {
      this.schools = data
    })
  }

}

