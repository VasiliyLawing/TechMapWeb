import {AfterViewInit, Component, OnInit} from '@angular/core';
import { StudentService } from '../student/student.service';
import { CompanyService } from '../company/company.service';
import { forkJoin } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';
import * as L from 'leaflet';
import { ManageMap } from './manageMap';
import { Student } from '../student/student';
import { Company } from '../company/company';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  providers: []
})
export class MapComponent implements AfterViewInit {
  public mapManager: ManageMap;

  public students: Student[] = [];
  public companies: Company[] = [];
  private map?: L.Map;

  constructor(
    private studentService: StudentService,
    private companyService: CompanyService,
    manageMap: ManageMap
  ) {
    this.mapManager = manageMap;
  }

  initMap() {
    this.map = L.map('map').setView([42.392574068021005, -87.97722454804106], 10);

    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OSM Mapnik <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map!);

    this.mapManager.initMap(this.map)
  }


  loadData() {
    forkJoin([
      this.studentService.findAll(),
      this.companyService.findAll()
    ]).pipe(
      tap(([studentData, companyData]) => {
        this.students = studentData;
        this.companies = companyData;

        this.mapManager.setStudentMarkers(studentData);
        this.mapManager.setCompanyMarkers(companyData);
      }),
      finalize(() => {
        if (this.map) {
          this.mapManager.setLayers(this.map);
          this.mapManager.manageCompanyMarkers(this.map, this.companies);
          alert(this.mapManager.returnEligibleStudents(this.companies, this.students))
        } else {
          console.error('Map is not initialized.');
        }
      })
    ).subscribe(
      () => {},
      error => {
        console.error('Error in subscriptions', error);
      }
    );
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.loadData();
  }
}
