import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CompanyService} from "../company.service";
import {Company} from "../company";
import {FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-edit-companies',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './edit-companies.component.html',
  styleUrls: ['./edit-companies.component.scss']
})
export class EditCompaniesComponent implements OnInit{

  public companies: Company[] = []
  public newCompany: Company | undefined


  addCompany = new FormGroup({
    name: new FormControl(''),
    longitude: new FormControl(''),
    latitude: new FormControl('')
  });

  addNewCompany(addForm: NgForm) {


    console.log(this.addCompany.value.name)
    this.companyService.addCompany(addForm.value).subscribe(
      (company: Company) => {

        this.getCompanies()

      }, error => {
        console.log(error);
      })
  }
  public getCompanies() {
    this.companyService.findAll().subscribe(data => {
      this.companies = data;
    });
  }

  public deleteCompany(id: number) {
    this.companyService.deleteCompany(id).subscribe(
      () => {
        this.getCompanies()
      }
    )
  }
  constructor(private companyService: CompanyService) {
  }

  ngOnInit(): void {
    this.getCompanies()

  }

  protected readonly name = name;
}
