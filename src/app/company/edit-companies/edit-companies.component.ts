import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CompanyService} from "../company.service";
import {Company} from "../company";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-edit-companies',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './edit-companies.component.html',
  styleUrls: ['./edit-companies.component.scss']
})
export class EditCompaniesComponent implements OnInit{

  public companies: Company[] = []

  addCompany = new FormGroup({
    name: new FormControl(''),
    longitude: new FormControl(''),
    latitude: new FormControl('')
  });

  addNewCompany() {


    console.log(this.addCompany.value.name)

    this.companyService.addCompany(Company())


  }

  constructor(private companyService: CompanyService) {
  }

  ngOnInit(): void {
    this.companyService.findAll().subscribe(data => {
      this.companies = data;
    });


  }

  protected readonly name = name;
}
