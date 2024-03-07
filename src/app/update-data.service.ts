import { Injectable } from '@angular/core';
import { CompanyTableComponent } from './company/table/company-table.component';
import { FieldTableComponent } from './field/table/field-table.component';
import { TableSchoolsComponent } from './school/table/table.component';

@Injectable({
  providedIn: 'root'
})
export class UpdateDataService {

  constructor() { }
  // BTW NEED TO UPDATE IF GO TO SCHOOLS
  companies!: CompanyTableComponent
  fields!: FieldTableComponent
  schools!: TableSchoolsComponent


  initCompaniesComponent(component: CompanyTableComponent) {
    this.companies = component
  }
  initFieldsComponent(component: FieldTableComponent) {
    this.fields = component

  }
  initSchoolsComponent(component: TableSchoolsComponent) {
    this.schools = component
  }

  update() {
    this.companies.ngOnInit()
    this.fields.ngOnInit()
    this.schools.ngOnInit()
  }


}
