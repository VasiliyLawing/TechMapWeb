// © 2024 Vasiliy Lawing
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EligibleStudentsListComponent} from "./eligible-students-list/eligible-students-list.component";
import {CompanyListComponent} from "./company-list/company-list.component";
import {ToastModule} from "primeng/toast";
import {TableModule} from "primeng/table";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {ChartModule} from "primeng/chart";
import {MoreInfoComponent} from './more-info/more-info.component';
import {RippleModule} from "primeng/ripple";
import {TooltipModule} from "primeng/tooltip";
import { EligibleSchoolsListComponent } from './eligible-schools-list/eligible-schools-list.component';
import {OverlayPanelModule} from "primeng/overlaypanel";
import {DividerModule} from "primeng/divider";


@NgModule({
  declarations: [EligibleStudentsListComponent, CompanyListComponent, MoreInfoComponent, EligibleSchoolsListComponent],
    exports: [
        CompanyListComponent,
        EligibleStudentsListComponent,
        MoreInfoComponent,
        EligibleSchoolsListComponent
    ],
    imports: [
        CommonModule,
        ToastModule,
        TableModule,
        InputTextModule,
        ButtonModule,
        CardModule,
        ChartModule,
        RippleModule,
        TooltipModule,
        OverlayPanelModule,
        DividerModule
    ]
})
export class MapModule { }
