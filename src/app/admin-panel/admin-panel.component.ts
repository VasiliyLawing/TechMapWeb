import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Role, User } from '../auth/user';
import { MenuItem } from 'primeng/api';
import { CompanyService } from '../company/company.service';
import { SchoolService } from '../school/school.service';
import { user } from 'firebase-functions/v1/auth';
import { NgForm } from '@angular/forms';
import {Browser} from "leaflet";
import win = Browser.win;




@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})

export class AdminPanelComponent implements OnInit {
  addingUser = false
  adminRole = Role.ADMIN
  amountOfCompanies = 0
  amountOfSchools = 0
  roles = Object.keys(Role).filter((v) => isNaN(Number(v)))

  newUserPassword!: string


  deleteUser(user: User) {
    this.authService.deleteUser(user).subscribe(() => {
      this.getUsers()
      if (user.username === this.authService.userValue?.username)
        window.location.reload()
    })
  }

  changePassword(form: NgForm) {

    this.authService.changePassword(form.value).subscribe(() => {
      this.getUsers()

      if (form.value.username === this.authService.userValue?.username) {
        window.location.reload()
      }

    })
  }

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

  // users = [
  //   new TemporaryUser("Billy", Role.admin),
  //   new TemporaryUser("Robbert", Role.guest),
  //   new TemporaryUser("Billy", Role.admin),
  //   new TemporaryUser("Robbert", Role.guest),
  //   new TemporaryUser("Billy", Role.admin),
  //   new TemporaryUser("Robbert", Role.guest)
  // ]
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


    this.authService.getAll().subscribe((data) => {
      console.log(data)
      this.users = data
    })

  }

  getUsers() {
    this.authService.getAll().subscribe((data) => {
      this.users = data
    })
  }

  registerUser(user: NgForm) {
    // user.value.role = this.selectedRole


    console.log(user.value)
    this.authService.register(user.value).subscribe(() => {
        this.getUsers()
        this.addingUser = false
    })

  }
}
