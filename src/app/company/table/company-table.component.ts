// © 2024 Vasiliy Lawing
import {Component, OnInit} from '@angular/core';
import {CompanyService} from "../company.service";
import {Company} from "../company";
import { UpdateDataService } from 'src/app/update-data.service';

@Component({
  selector: 'app-company',
  templateUrl: './company-table.component.html',
  styleUrls: ['./company-table.component.scss'],
})
export class CompanyTableComponent implements OnInit {
  public companies: Company[] = []

  constructor(private companyService: CompanyService, private updateService: UpdateDataService) {
  }

  ngOnInit(): void {

    this.updateService.initCompaniesComponent(this)

    this.companyService.findAll().subscribe(data => {
      this.companies = data;
      console.log(this.companies)
    });
  }

}
