import {Component, Input} from '@angular/core';
import {School} from "../../school/school";
import {Company} from "../../company/company";
import * as FileSaver from "file-saver"

@Component({
  selector: 'app-eligible-schools-list',
  templateUrl: './eligible-schools-list.component.html',
  styleUrls: ['./eligible-schools-list.component.scss']
})
export class EligibleSchoolsListComponent {

  @Input("eligibleSchools") eligibleSchools: School[] = []
  @Input("selectedCompany") selectedCompany!: Company
  first = 0;

  cols = [
    { field: "name", header: "name" },
    { field: "latitude", header: "latitude" } ,
    { field: "longitude", header: "longitude" }]
  exportColumns = this.cols.map(col => ({title: col.header, dataKey: col.field}));



  exportPdf() {
    import('jspdf').then((jsPDF) => {
      import('jspdf-autotable').then((x) => {
        const doc = new jsPDF.default('p', 'px', 'a4');
        (doc as any).autoTable(this.exportColumns, this.eligibleSchools);
        doc.save(`${this.selectedCompany.name}.pdf`);
      });
    });
  }

  exportExcel() {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.eligibleSchools);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, this.selectedCompany.name);
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

  rows = 5;

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  pageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }

  isLastPage(): boolean {
    return this.eligibleSchools ? this.first === this.eligibleSchools.length - this.rows : true;
  }

  isFirstPage(): boolean {
    return this.eligibleSchools ? this.first === 0 : true;
  }

}

