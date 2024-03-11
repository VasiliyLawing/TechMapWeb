// © 2024 Vasiliy Lawing
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MapComponent} from "./map/map.component";

import {EditCompaniesComponent} from "./company/edit/edit-companies.component";
import {EditStudentsComponent} from "./student/edit-students/edit-students.component";
import {AuthGuard} from "./auth/AuthGuard";
import {LoginFormComponent} from "./auth/login-form/login-form.component";
import {EditFieldsComponent} from "./field/edit/edit-fields.component";
import {SettingsComponent} from './settings/settings.component';
import {EditSchoolsComponent} from "./school/edit/edit.component";
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

const routes: Routes = [
    {path: 'login', component: LoginFormComponent},
    {path: 'map', component: MapComponent},

    {
        path: '', canActivate: [AuthGuard],
        children:
            [
                {path: 'settings', component: SettingsComponent},
                {path: 'edit-students', component: EditStudentsComponent},
                {path: 'edit-companies', component: EditCompaniesComponent},
                {path: 'edit-fields', component: EditFieldsComponent},
                {path: 'edit-schools', component: EditSchoolsComponent},
                {path: 'admin-panel', component: AdminPanelComponent}
            ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
