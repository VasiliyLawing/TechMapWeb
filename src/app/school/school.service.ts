import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {School} from "./school";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  private urlApi = environment.restApiUrl

  constructor(private http: HttpClient) { }

  public findAll(): Observable<School[]> {
    return this.http.get<School[]>(`${this.urlApi}/schools/`);
  }

  public add(school: School): Observable<School> {
    return this.http.post<School>(`${this.urlApi}/schools/add/`, school);
  }

  public update(school: School): Observable<School> {
    return this.http.put<School>(`${this.urlApi}/schools/update/`, school)
  }
  delete(id: number): Observable<any> {
    const url = `${this.urlApi}/schools/${id}/`;
    return this.http.delete(url);
  }
}
