// © 2024 Vasiliy Lawing
import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Field} from "./field";

@Injectable({
  providedIn: 'root'
})
export class FieldService {

  constructor(private http: HttpClient) { }

  findAll() {

    return this.http.get<Field[]>(`https://techmapback.onrender.com/api/fields/`);
  }
  update(field: Field) {
    return this.http.put<Field>(`https://techmapback.onrender.com/api/fields/update/`, field)
  }
  add(field: Field) {
    return this.http.post<Field>(`https://techmapback.onrender.com/api/fields/add/`, field);

  }
  remove(id: number) {
    return this.http.delete(`https://techmapback.onrender.com/api/fields/${id}/`);

  }

}
