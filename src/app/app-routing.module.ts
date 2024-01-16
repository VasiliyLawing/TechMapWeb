import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MapComponent} from "./map/map.component";
import {ManageDataComponent} from "./manage-data/manage-data.component";

const routes: Routes = [
  { path: 'map', component: MapComponent },
  { path: 'manageData', component: ManageDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
