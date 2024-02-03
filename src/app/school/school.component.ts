import {Component, OnInit} from '@angular/core';
import {SchoolService} from "./school.service";
import {School} from "./school";

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent implements OnInit{
  schools!: School[]

  constructor(public schoolService: SchoolService) {
  }

  ngOnInit(): void {
    // this.schoolService.findAll().subscribe(data => {
    //   this.schools = data
    // })
  }

}
