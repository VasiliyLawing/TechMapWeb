// © 2024 Vasiliy Lawing
import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Field} from "./field";
import {environment} from "../../environments/environment.firebase";

@Injectable({
  providedIn: 'root'
})
export class FieldService {

  private urlApi = environment.restApiUrl

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<Field[]>(`${this.urlApi}/public/fields/`);
  }
  update(field: Field) {
    return this.http.put<Field>(`${this.urlApi}/user/fields/update/`, field)
  }
  add(field: Field) {
    return this.http.post<Field>(`${this.urlApi}/user/fields/add/`, field);
  }
  remove(id: number) {
    return this.http.delete(`${this.urlApi}/user/fields/${id}/`);

  }

}
