import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Company} from "./company";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private urlApi = 'https://techmapback.onrender.com'

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

  deleteCompany(id: number): Observable<any> {
    const url = `${this.urlApi}/api/companies/${id}/`;
    return this.http.delete(url);
  }

}

