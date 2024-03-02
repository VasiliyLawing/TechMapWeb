// © 2024 Vasiliy Lawing

import {Component} from '@angular/core';
import {AuthService} from "./auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TechWebMap';

  constructor(public authService: AuthService) {
  }
  isUserLoggedIn = this.authService.getUser


}
