// © 2024 Vasiliy Lawing
import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Student} from "./student";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment.firebase";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private urlApi = environment.restApiUrl

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Student[]> {

    return this.http.get<Student[]>(`${this.urlApi}/public/students/`);
  }

  public addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.urlApi}/user/students/add/`, student);
  }

  public updateStudent(student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.urlApi}/user/students/update/`, student)
  }

  deleteStudent(id: number) {
    const url = `${this.urlApi}/user/students/${id}/`;
    return this.http.delete(url);
  }

}

