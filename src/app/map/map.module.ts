import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EligibleStudentsListComponent} from "./eligible-students-list/eligible-students-list.component";
import {CompanyListComponent} from "./company-list/company-list.component";
import {ToastModule} from "primeng/toast";
import {TableModule} from "primeng/table";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {KeyComponent} from './key/key.component';
import {ControlsComponent} from './controls/controls.component';
import {ChartModule} from "primeng/chart";
import {MoreInfoComponent} from './more-info/more-info.component';


@NgModule({
  declarations: [EligibleStudentsListComponent, CompanyListComponent, KeyComponent, ControlsComponent, MoreInfoComponent],
    exports: [
        CompanyListComponent,
        EligibleStudentsListComponent,
        KeyComponent,
        ControlsComponent,
        MoreInfoComponent
    ],
    imports: [
        CommonModule,
        ToastModule,
        TableModule,
        InputTextModule,
        ButtonModule,
        CardModule,
        ChartModule
    ]
})
export class MapModule { }
