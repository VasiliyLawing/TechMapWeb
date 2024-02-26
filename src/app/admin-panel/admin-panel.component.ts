import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Role, User } from '../auth/user';
import { MenuItem } from 'primeng/api';
import { CompanyService } from '../company/company.service';
import { SchoolService } from '../school/school.service';
import { user } from 'firebase-functions/v1/auth';

class TemporaryUser {
  username: string
  role: Role

  constructor(username: string, role: Role) {
    this.username = username
    this.role = role
    
  }
  roleString() {
    if (this.role === Role.admin) { //TODO: Replace with switch case?
      return "ADMIN"
    } else if (this.role === Role.guest) {
      return "GUEST"
    } else if (this.role === Role.user) {
      return "USER"
    }

    return "NO ROLE"
  }

}



@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})

export class AdminPanelComponent implements OnInit {
  addingUser = false
  adminRole = Role.admin
  amountOfCompanies = 0
  amountOfSchools = 0


  toggleAddingUser() {
    this.addingUser = !this.addingUser
  }

  users = [
    new TemporaryUser("Billy", Role.admin),
    new TemporaryUser("Robbert", Role.guest),
    new TemporaryUser("Billy", Role.admin),
    new TemporaryUser("Robbert", Role.guest),
    new TemporaryUser("Billy", Role.admin),
    new TemporaryUser("Robbert", Role.guest)
  ]

  constructor(public authService: AuthService, private schoolService: SchoolService,
              private companyService: CompanyService) {}

  ngOnInit() {
      this.companyService.findAll().subscribe((data) => {
          this.amountOfCompanies = data.length
      })
      this.schoolService.findAll().subscribe((data) => {
        this.amountOfSchools = data.length
      })

    
  }
}
