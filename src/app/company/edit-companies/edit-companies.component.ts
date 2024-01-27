import {Component, OnInit} from '@angular/core';

import {Company} from "../company";
import {CompanyService} from "../company.service";
import {ConfirmationService, MessageService, SelectItem} from "primeng/api";

@Component({
  selector: 'app-edit-companies',
  templateUrl: './edit-companies.component.html',
  styleUrls: ['./edit-companies.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class EditCompaniesComponent implements OnInit{
  productDialog: boolean = false;

  companies!: Company[];

  company!: Company;
  clonedProducts: { [s: string]: Company } = {};


  constructor(private companyService: CompanyService, private messageService: MessageService, private confirmationService: ConfirmationService) {}


  onRowEditInit(company: Company) {
    this.clonedProducts[company.id.toString() as string] = { ...company };
  }

  onRowEditSave(company: Company) {
    this.companyService.updateCompany(company).subscribe(() => {
      this.getCompanies()
    });
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product is updated' });

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






  deleteStudent(company: Company) {
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

        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
      }
    });
  }



}
