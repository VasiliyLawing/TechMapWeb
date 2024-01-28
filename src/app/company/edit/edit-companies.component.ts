import {Component, OnInit} from '@angular/core';

import {Company} from "../company";
import {CompanyService} from "../company.service";
import {ConfirmationService, MessageService, SelectItem} from "primeng/api";
import {FormControl, FormGroup, NgForm} from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './edit-companies.component.html',
  styleUrls: ['./edit-companies.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class EditCompaniesComponent implements OnInit{
  dialog: boolean = false;

  companies!: Company[];

  company!: Company;
  clonedProducts: { [s: string]: Company } = {};



  addCompany = new FormGroup({
    name: new FormControl(''),
    longitude: new FormControl(''),
    latitude: new FormControl('')
  });

  closeDialog() {
    this.dialog = false
  }

  addNewCompany(addForm: NgForm) {

    console.log(this.addCompany.value.name)
    this.companyService.addCompany(addForm.value).subscribe(
        () => {

          this.getCompanies()

        }, error => {
          console.log(error);
        })
  }

  openNew() {
    this.dialog = true
  }

  constructor(private companyService: CompanyService, private messageService: MessageService, private confirmationService: ConfirmationService) {}


  onRowEditInit(company: Company) {
    this.clonedProducts[company.id.toString() as string] = { ...company };
  }

  onRowEditSave(company: Company) {
    this.companyService.updateCompany(company).subscribe(() => {
      this.getCompanies()
    });
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Company is updated' });

  }

  onRowEditCancel(company: Company, index: number) {
    this.companies[index] = this.clonedProducts[company.id.toString() as string];
    delete this.clonedProducts[company.id.toString() as string];
  }



  ngOnInit() {
    this.getCompanies()
  }

  getCompanies() {
    this.companyService.findAll().subscribe(data => {
      this.companies = data;
    });
  }






  deleteCompany(company: Company) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + company.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.companyService.deleteCompany(company.id).subscribe(
            () => {
              this.getCompanies()
            }
        )

        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Company Deleted', life: 3000 });
      }
    });
  }



}