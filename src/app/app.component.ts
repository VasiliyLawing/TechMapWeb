import { Component } from '@angular/core';
import {StudentComponent} from "./student/table/student.component";
import {Router} from "@angular/router";
import {AuthService} from "./auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TechWebMap';

  constructor(private router: Router, public authService: AuthService) {
  }

  logout() {
    location.reload()
  }


}
