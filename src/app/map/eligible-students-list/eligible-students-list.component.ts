import {Component, Input} from '@angular/core';
import {Student} from "../../student/student";
import * as FileSaver from 'file-saver';
import { Company } from 'src/app/company/company';

@Component({
  selector: 'app-eligible-students-list',
  templateUrl: './eligible-students-list.component.html',
  styleUrls: ['./eligible-students-list.component.scss']
})
export class EligibleStudentsListComponent {
  @Input("eligibleStudents") eligibleStudents: Student[] = []
  @Input("selectedCompany") selectedCompany!: Company
  first = 0;

  cols = [ 
    { field: "name", header: "name" }, 
    { field: "latitude", header: "latitude" } ,
    { field: "longitude", header: "longitude" }, 
    { field: "field.name", header: "Field" }]
    
    exportColumns = this.cols.map(col => ({title: col.header, dataKey: col.field}));



exportPdf() {
  import('jspdf').then((jsPDF) => {
      import('jspdf-autotable').then((x) => {
          const doc = new jsPDF.default('p', 'px', 'a4');
          (doc as any).autoTable(this.exportColumns, this.eligibleStudents);
          doc.save(`${this.selectedCompany.name}.pdf`);
      });
  });
}

exportExcel() {
  import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.eligibleStudents);
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
    return this.eligibleStudents ? this.first === this.eligibleStudents.length - this.rows : true;
  }

  isFirstPage(): boolean {
    return this.eligibleStudents ? this.first === 0 : true;
  }

}
