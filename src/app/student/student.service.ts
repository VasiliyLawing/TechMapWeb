import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Student} from "./student";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Student[]> {
    return this.http.get<Student[]>(`https://techmapback.onrender.com/api/api/students/`);
  }

  public addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(`https://techmapback.onrender.com/api/api/students/add/`, student);
  }

  public updateStudent(student: Student): Observable<Student> {
    return this.http.put<Student>(`https://techmapback.onrender.com/api/api/students/update/`, student)
  }

  deleteStudent(id: number) {
    const url = `https://techmapback.onrender.com/api/students/${id}/`;
    return this.http.delete(url);
  }

}

