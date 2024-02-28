// © 2024 Vasiliy Lawing
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map, Observable} from "rxjs";
import {Role, User, UserJson} from "./user";
import {environment} from "../../environments/environment.firebase"; // Change for firebase to environment.firebase not most efficient


export interface AuthRequestData {
  username: string;
  password: string;
}

export interface AuthRegisterData {
  username: string;
  password: string;
  role: Role;
}

@Injectable()
export class AuthService {
  private userSubject: BehaviorSubject<User|null>;
  private readonly user: Observable<User|null>;

  private urlApi = environment.restApiUrl

  constructor(private http: HttpClient) {
    this.userSubject = new BehaviorSubject<User|null>(null);
    this.user = this.userSubject.asObservable();
  }

  public getUser(): Observable<User|null> {
    return this.user;
  }

  public get userValue(): User|null {
    return this.userSubject.value;
  }

  public register(registerData: AuthRegisterData): Observable<User> {

    const url = `${this.urlApi}/auth/login/`;

    return this.http.post<User>(url, registerData)
  }

  public requestAuth(requestData: AuthRequestData): Observable<User> {

    const url = `${this.urlApi}/auth/login/`;

    return this.http.post<UserJson>(url, requestData).pipe(map(userJson => {
      const user = User.parseFromJson(userJson);
      this.userSubject.next(user);
      return user;
    }));

  }

  public getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.urlApi}/auth/getAll`)
  }

}
