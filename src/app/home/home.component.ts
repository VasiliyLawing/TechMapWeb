import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthenticationService} from "../authentication/authentication.service";
import {LoginComponent} from "../login/login.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, LoginComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(public authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    if (this.authenticationService.currentUserSignal === null) {
      console.log("Not logged in")
    }
  }




}
