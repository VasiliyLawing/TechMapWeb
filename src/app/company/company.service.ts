import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest} from "@angular/common/http";
import {Company} from "./company";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private urlApi = 'http://localhost:8080'

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.urlApi}/api/companies/`);
  }

  public addCompany(company: Company): Observable<Company> {
    return this.http.post<Company>(`${this.urlApi}/api/companies/add/`, company);
  }

  public updateCompany(company: Company): Observable<Company> {
    return this.http.put<Company>(`${this.urlApi}/api/companies/update/`, company)
  }
  search(term: string): Observable<any> {
    const url = `${this.urlApi}/search?term=${term}`;
    return this.http.get(url);
  }
  deleteCompany(id: number): Observable<any> {
    const url = `${this.urlApi}/api/companies/${id}/`;
    return this.http.delete(url);
  }

}

