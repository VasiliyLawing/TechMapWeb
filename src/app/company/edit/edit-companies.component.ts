// © 2024 Vasiliy Lawing
import {Component, OnInit} from '@angular/core';

import {Company} from "../company";
import {CompanyService} from "../company.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {NgForm} from "@angular/forms";
import {Field} from "../../field/field";
import {FieldService} from "../../field/field.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit-companies.component.html',
  styleUrls: ['./edit-companies.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class EditCompaniesComponent implements OnInit{
  dialog: boolean = false;
  selectedFields!: Field[]
  companies!: Company[];

  company!: Company;
  clonedProducts: { [s: string]: Company } = {};
  fields!: Field[]

  selectAll = false

  onChange(event: any) {
    const { originalEvent, value } = event
    if(value) this.selectAll = value.length === this.fields.length;
  }

  closeDialog() {
    this.dialog = false
  }

  addNewCompany(addForm: NgForm) {

    addForm.value.fields = this.selectedFields
    this.companyService.addCompany(addForm.value).subscribe(
        () => {

          this.getCompanies()

        }, error => {
          console.log(error);
        })
    this.messageService.add({ severity: 'success', summary: 'Company Created', detail: `${addForm.value.name}` });

  }

  openNew() {
    this.dialog = true
  }

  constructor(private companyService: CompanyService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private fieldService: FieldService) {}


  onRowEditInit(company: Company) {
    this.clonedProducts[company.id.toString() as string] = { ...company };
  }

  onRowEditSave(company: Company) {
    this.companyService.updateCompany(company).subscribe(() => {
      this.getCompanies()
    }, error => {
      console.log(error);
    })
    this.messageService.add({ severity: 'success', summary: 'Company Updated', detail: `${company.name}` });

  }

  onRowEditCancel(company: Company, index: number) {
    this.companies[index] = this.clonedProducts[company.id.toString() as string];
    delete this.clonedProducts[company.id.toString() as string];
    this.messageService.add({ severity: 'error', summary: 'Company Update Canceled', detail: `${company.name}` });

  }



  ngOnInit() {
    this.getCompanies()
    this.fieldService.findAll().subscribe(data => {
      this.fields = data
    })
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

        this.messageService.add({ severity: 'success', summary: 'Company Deleted', detail: `${company.name}` });
      }
    });
  }



}
