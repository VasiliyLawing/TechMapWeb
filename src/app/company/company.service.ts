// © 2024 Vasiliy Lawing
import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Company} from "./company";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  //private urlApi = ''

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Company[]> {
    return this.http.get<Company[]>(`https://techmapback.onrender.com/api/companies/`);
  }

  public addCompany(company: Company): Observable<Company> {
    return this.http.post<Company>(`https://techmapback.onrender.com/api/companies/add/`, company);
  }

  public updateCompany(company: Company): Observable<Company> {
    return this.http.put<Company>(`https://techmapback.onrender.com/api/companies/update/`, company)
  }
  deleteCompany(id: number): Observable<any> {
    const url = `https://techmapback.onrender.com/api/companies/${id}/`;
    return this.http.delete(url);
  }

}

