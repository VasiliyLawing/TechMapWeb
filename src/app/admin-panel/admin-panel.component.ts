import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Role, User } from '../auth/user';
import { MenuItem } from 'primeng/api';
import { CompanyService } from '../company/company.service';
import { SchoolService } from '../school/school.service';
import { user } from 'firebase-functions/v1/auth';
import { NgForm } from '@angular/forms';

class TemporaryUser {
  username: string
  role: Role

  changingPassword = false

  toggleChangingPassword() {
    this.changingPassword = !this.changingPassword
  }

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
  roles = Object.keys(Role).filter((v) => isNaN(Number(v)))
  selectedRole: string  = ""


  toggleAddingUser() {
    this.addingUser = !this.addingUser
  }

  getRoles(): string[] {
    let roles: string[] = []
    this.roles.forEach((key, index) => {
        roles.push(key)
    })

    return roles

  }


  users!: User[]

  constructor(public authService: AuthService, private schoolService: SchoolService,
              private companyService: CompanyService) {}

  ngOnInit() {
      this.companyService.findAll().subscribe((data) => {
          this.amountOfCompanies = data.length
      })
      this.schoolService.findAll().subscribe((data) => {
        this.amountOfSchools = data.length
      })

      this.getUsers
  }

  getUsers() {
    this.authService.getAll().subscribe((data) => {
      this.users = data
    })
  }

  registerUser(user: NgForm) {
    user.value.role = this.selectedRole
    this.authService.register(user.value).subscribe(() => {
        this.getUsers()
    })
  }
}
