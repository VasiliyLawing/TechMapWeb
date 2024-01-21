import {Component, inject, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthenticationService} from "../authentication/authentication.service";
import {Router} from "@angular/router";
import {CommonModule} from "@angular/common";

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  fb = inject(FormBuilder)

  loginForm = this.fb.nonNullable.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })
  constructor(private authenticationService: AuthenticationService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  login() {
  this.authenticationService.login(this.loginForm).subscribe((response) => {
    console.log(response)
    localStorage.setItem('token', response.token);
    this.authenticationService.currentUserSignal.set(response)
    this.router.navigateByUrl('/map').then(() => {})

  })
  }
}
