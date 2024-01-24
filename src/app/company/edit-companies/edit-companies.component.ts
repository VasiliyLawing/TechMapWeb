import {Component, OnInit} from '@angular/core';
import {CompanyService} from "../company.service";
import {Company} from "../company";
import {FormControl, FormGroup, NgForm} from "@angular/forms";

@Component({
  selector: 'app-edit-companies',
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
      () => {

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
