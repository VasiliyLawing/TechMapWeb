import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Company} from "./company";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private urlApi = ''

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Company[]> {
    return this.http.get<Company[]>(`http://localhost:8080/api/companies/`);
  }

  public addCompany(company: Company): Observable<Company> {
    return this.http.post<Company>(`http://localhost:8080/api/companies/add/`, company);
  }

  public updateCompany(company: Company): Observable<Company> {
    return this.http.put<Company>(`http://localhost:8080/api/companies/update/`, company)
  }

  deleteCompany(id: number): Observable<any> {
    const url = `http://localhost:8080/api/companies/${id}/`;
    return this.http.delete(url);
  }

}

