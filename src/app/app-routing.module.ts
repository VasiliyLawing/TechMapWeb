import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MapComponent} from "./map/map.component";
import {ManageDataComponent} from "./manage-data/manage-data.component";

import {EditCompaniesComponent} from "./company/edit-companies/edit-companies.component";
import {EditStudentsComponent} from "./student/edit-students/edit-students.component";
import {AuthGuard} from "./auth/AuthGuard";
import {LoginFormComponent} from "./auth/login-form/login-form.component";

const routes: Routes = [
  {path: 'login', component: LoginFormComponent},
  {path: '', canActivate: [AuthGuard], children: [
      { path: 'map',                 component: MapComponent },
  { path: 'manageData',          component: ManageDataComponent },
  { path: 'edit-students', component: EditStudentsComponent },
  { path: 'edit-companies',component: EditCompaniesComponent },
      ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
