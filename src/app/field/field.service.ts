import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Field} from "./field";
import {Company} from "../company/company";

@Injectable({
  providedIn: 'root'
})
export class FieldService {

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<Field[]>(`/api/fields/`);
  }
  update(field: Field) {
    return this.http.put<Field>(`/api/fields/update/`, field)
  }
  add(field: Field) {
    return this.http.post<Field>(`/api/fields/add/`, field);

  }
  remove(id: number) {
    return this.http.delete(`/api/fields/${id}/`);

  }

}
