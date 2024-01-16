import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MapComponent} from "./map/map.component";
import {ManageDataComponent} from "./manage-data/manage-data.component";
import {EditStudentsComponent} from "./student/edit-students/edit-students.component";
import {EditCompaniesComponent} from "./company/edit-companies/edit-companies.component";

const routes: Routes = [
  { path: 'map',                 component: MapComponent },
  { path: 'manageData',          component: ManageDataComponent },
  { path: 'edit-students', component: EditStudentsComponent },
  { path: 'edit-companies',component: EditCompaniesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
