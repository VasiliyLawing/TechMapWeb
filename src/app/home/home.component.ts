import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "../login/login.component";
import {UserService} from "../authentication/user.service";
import {User, UserJson} from "../authentication/userJson";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, LoginComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: User | undefined | null;

  constructor(public userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUser().subscribe((user) => {
      console.log(user)
      this.user = user
    });
  }
}
