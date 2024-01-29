import {Component, Input} from '@angular/core';
import {Company} from "../../company/company";
import {MessageService} from "primeng/api";
import {ToastService} from "../../toast.service";
import {ManageMap} from "../manageMap";

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
})

export class CompanyListComponent {
  @Input("companies") companies: Company[] = []
  selectedCompany!: Company;
  private selectedTempCompany!: Company;

  constructor(private messageService: MessageService, private toastService: ToastService, private mapService: ManageMap) {}


  onRowSelect(event: any) {
    this.selectedTempCompany = this.selectedCompany
    this.mapService.selectCompany(this.companies, this.selectedCompany.id)
    this.messageService.add({ severity: 'info', summary: 'Company Selected', detail: event.data.name });
  }

  onRowUnselect(event: any) {
    this.mapService.unselectCompany(this.companies, this.selectedTempCompany.id)
    this.messageService.add({ severity: 'info', summary: 'Company Unselected', detail: event.data.name });
  }

  protected readonly HTMLInputElement = HTMLInputElement;
}
