import {inject, Injectable, signal} from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {User} from "./user";
import {Form, FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUserSignal = signal<User | undefined | null>(undefined);

  private urlApi = 'http://localhost:8080'

  http = inject(HttpClient)
  constructor() {}

  login(user: FormGroup<{username: FormControl<string>, password: FormControl<string>}>): Observable<any> {
    return this.http.post<{ user: User }>(`${this.urlApi}/auth/login/`, {
      username: user.getRawValue().username,
      password: user.getRawValue().password
    })
  }

  logout() {
    localStorage.removeItem("token")
  }

  isUserLoggedIn(): boolean {
    return localStorage.getItem("token") != null;
  }

}
