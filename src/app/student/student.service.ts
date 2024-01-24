import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest} from "@angular/common/http";
import {Student} from "./student";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private urlApi = 'https://techmapback.onrender.com'

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

  deleteStudent(id: number) {
    const url = `/api/students/${id}/`;
    return this.http.delete(url);
  }

}

