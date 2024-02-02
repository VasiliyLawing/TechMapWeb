// © 2024 Vasiliy Lawing
import {Component, OnInit} from '@angular/core';
import {FieldService} from "../field.service";
import {Field} from "../field";

@Component({
  selector: 'app-field-table',
  templateUrl: './field-table.component.html',
  styleUrls: ['./field-table.component.scss']
})
export class FieldTableComponent implements OnInit {
  public fields: Field[] = []
  constructor(private fieldService: FieldService) {}

  ngOnInit() {
    this.fieldService.findAll().subscribe(data=> {
      this.fields = data
      console.log(data)
      console.log(this.fields[0])
    }, error => {
      console.log(error)
    })
  }
}
