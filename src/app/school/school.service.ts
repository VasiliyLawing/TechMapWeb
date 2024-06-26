import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {NewSchool, School} from "./school";
import {environment} from "../../environments/environment.firebase";

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  private urlApi = environment.restApiUrl

  constructor(private http: HttpClient) { }

  public findAll(): Observable<School[]> {
    return this.http.get<School[]>(`${this.urlApi}/public/schools/`);
  }

  public add(school: School | NewSchool): Observable<School> {
    return this.http.post<School>(`${this.urlApi}/user/schools/add/`, school);
  }

  public update(school: School): Observable<School> {
    return this.http.put<School>(`${this.urlApi}/user/schools/update/`, school)
  }
  delete(id: number): Observable<any> {
    const url = `${this.urlApi}/user/schools/${id}/`;
    return this.http.delete(url);
  }
}
