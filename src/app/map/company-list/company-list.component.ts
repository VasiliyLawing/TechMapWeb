// © 2024 Vasiliy Lawing
import {Component, Input} from '@angular/core';
import {Company} from "../../company/company";
import {MessageService} from "primeng/api";
import {ToastService} from "../../toast.service";
import {ManageMap} from "../manageMap";
import {OverlayPanel} from "primeng/overlaypanel";

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
})

export class CompanyListComponent {
  @Input("companies") companies: Company[] = []
  selectedCompany!: Company;
  // selectedCompanyName = this.selectedCompany.name || "NO COMPANIES SELECTED"
  private selectedTempCompany!: Company;
  isCompanySelected = false;
  dialogName = "Empty"
  
  constructor(private messageService: MessageService, private toastService: ToastService, private mapService: ManageMap) {}


  onRowSelect(event: any) {
    let selectedCompanies = this.mapService.getSelectedCompanies(this.companies)
    if (selectedCompanies[0] !== null) {
      selectedCompanies.forEach(company =>{
        this.mapService.unselectCompany(this.companies, company.id)
      })
    }
    this.dialogName = this.selectedCompany.name
    this.selectedTempCompany = this.selectedCompany
    
    this.mapService.selectCompany(this.companies, this.selectedCompany.id)
    
    this.messageService.clear();
    this.messageService.add({key: 'tc', severity: 'info', summary: 'Company Selected', detail: event.data.name });
    this.isCompanySelected = true;
  }

  onRowUnselect(event: any) {
    this.mapService.unselectCompany(this.companies, this.selectedTempCompany.id)
    this.messageService.clear();
    this.messageService.add({key: 'tc', severity: 'info', summary: 'Company Unselected', detail: event.data.name });
    this.isCompanySelected = false;

  }

  protected readonly HTMLInputElement = HTMLInputElement;
}
