import {Component, OnInit} from "@angular/core";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthRequestData, AuthService} from "../auth.service";
import {CheckboxModule} from "primeng/checkbox";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {InputTextModule} from "primeng/inputtext";
import {NgOptimizedImage} from "@angular/common";
import {MessagesModule} from "primeng/messages";
import {Message} from "primeng/api";

@Component({
  standalone: true,
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  imports: [
    ReactiveFormsModule,
    CheckboxModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    NgOptimizedImage,
    MessagesModule
  ],
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {


  form = this.fb.nonNullable.group({
    username: ['',Validators.required],
    password: ['',Validators.required]
  });
  constructor(private fb:FormBuilder,
              private authService: AuthService,
              private router: Router) {


  }

  onSubmit() {
    const requestData: AuthRequestData = {
      username: this.form.getRawValue().username,
      password: this.form.getRawValue().password,
    };

    this.authService.requestAuth(requestData)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigateByUrl('/map').then();
        },
        error => {
          console.log(error)
        }
      );

  }
}
