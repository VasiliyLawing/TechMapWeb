import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {School} from "./school";

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private http: HttpClient) { }

  public findAll(): Observable<School[]> {
    return this.http.get<School[]>(`api/schools/`);
  }

  public add(school: School): Observable<School> {
    return this.http.post<School>(`api/schools/add/`, school);
  }

  public update(school: School): Observable<School> {
    return this.http.put<School>(`api/schools/update/`, school)
  }
  delete(id: number): Observable<any> {
    const url = `api/schools/${id}/`;
    return this.http.delete(url);
  }
}
