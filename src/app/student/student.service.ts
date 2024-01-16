import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest} from "@angular/common/http";
import {Student} from "./student";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private urlApi = 'http://localhost:8080'

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.urlApi}/api/students/`);
  }
}

