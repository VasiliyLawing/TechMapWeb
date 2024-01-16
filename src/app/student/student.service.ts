import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest} from "@angular/common/http";
import {Student} from "./student";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private urlApi = 'http://localhost:8080'

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.urlApi}/api/students/`);
  }

  public addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.urlApi}/api/students/add/`, student);
  }

  public updateStudent(student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.urlApi}/api/students/update/`, student)
  }
  search(term: string): Observable<any> {
    const url = `${this.urlApi}/search?term=${term}`;
    return this.http.get(url);
  }
  deleteStudent(id: number) {
    const url = `${this.urlApi}/api/students/${id}/`;
    return this.http.delete(url);
  }

}

