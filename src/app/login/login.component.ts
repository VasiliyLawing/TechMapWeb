import { Component, Inject, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { UserService } from "../authentication/user.service";
import { HttpClient } from "@angular/common/http";
import {AuthRequestData, UserJson} from "../authentication/userJson";

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  // login() {
  //   this.http.post<{ token: string, user: UserJson }>(`http://localhost:8080/auth/login/`, {
  //     username: this.loginForm.getRawValue().username,
  //     password: this.loginForm.getRawValue().password
  //   }).subscribe((response) => {
  //     console.log(response);
  //     localStorage.setItem('token', response.token);
  //     this.userService.updateCurrentUser(response.user);
  //     console.log(response.user);
  //     this.router.navigateByUrl('/map').then();
  //   });
 // }
login() {
  const requestData: AuthRequestData = {
    username: this.loginForm.getRawValue().username ?? "",
    password: this.loginForm.getRawValue().password ?? ""
  };

  this.userService.requestAuth(requestData)
    .subscribe(
      data => {
/*        if (this.authGuard.redirectAfterLoginUrl !== null) {
          this.router.navigateByUrl(this.authGuard.redirectAfterLoginUrl);
        }*/
      },
      error => {
        //this.error = error;
      }
    );
}

}
