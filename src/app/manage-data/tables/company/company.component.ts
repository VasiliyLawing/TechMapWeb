import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {CompanyService} from "../../../company/company.service";
import {Company} from "../../../company/company";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
  imports: [
    NgForOf
  ],
  standalone: true
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
