// © 2024 Vasiliy Lawing
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MapComponent} from "./map/map.component";
import {ManageDataComponent} from "./manage-data/manage-data.component";

import {EditCompaniesComponent} from "./company/edit/edit-companies.component";
import {EditStudentsComponent} from "./student/edit-students/edit-students.component";
import {AuthGuard} from "./auth/AuthGuard";
import {LoginFormComponent} from "./auth/login-form/login-form.component";
import {EditFieldsComponent} from "./field/edit/edit-fields.component";
import {SettingsComponent} from './settings/settings.component';
import {EditSchoolsComponent} from "./school/edit/edit.component";

const routes: Routes = [
    {path: 'login', component: LoginFormComponent},

    {
        path: '', canActivate: [AuthGuard],
        children:
            [
                {path: 'map', component: MapComponent},
                {path: 'settings', component: SettingsComponent},
                {path: 'manageData', component: ManageDataComponent},
                {path: 'edit-students', component: EditStudentsComponent},
                {path: 'edit-companies', component: EditCompaniesComponent},
                {path: 'edit-fields', component: EditFieldsComponent},
                {path: 'edit-schools', component: EditSchoolsComponent}
            ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
