import {Component, OnInit} from '@angular/core';
import {CompanyService} from "../../company.service";
import {Company} from "../../company";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent implements OnInit {
  public companies: Company[] = []

  constructor(private companyService: CompanyService) {
  }

  ngOnInit(): void {
    this.companyService.findAll().subscribe(data => {
      this.companies = data;
    });
  }

}
