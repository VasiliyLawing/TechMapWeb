// © 2024 Vasiliy Lawing
import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Company} from "./company";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment.firebase"; // Change for firebase to environment.firebase not most efficient

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private urlApi = environment.restApiUrl

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.urlApi}/companies/`);
  }

  public addCompany(company: Company): Observable<Company> {
    return this.http.post<Company>(`${this.urlApi}/companies/add/`, company);
  }

  public updateCompany(company: Company): Observable<Company> {
    return this.http.put<Company>(`${this.urlApi}/companies/update/`, company)
  }
  deleteCompany(id: number): Observable<any> {
    const url = `${this.urlApi}/companies/${id}/`;
    return this.http.delete(url);
  }

}

