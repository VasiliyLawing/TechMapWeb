import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest} from "@angular/common/http";
import {Company} from "./company";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private urlApi = 'http://localhost:8080'

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.urlApi}/api/companies/`);
  }
}

