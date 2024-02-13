// © 2024 Vasiliy Lawing

import {AfterViewInit, Component} from '@angular/core';
import {StudentService} from '../student/student.service';
import {CompanyService} from '../company/company.service';
import {forkJoin} from 'rxjs';
import {finalize, tap} from 'rxjs/operators';
import * as L from 'leaflet';
import {ManageMap} from './manageMap';
import {Student} from '../student/student';
import {Company} from '../company/company';
import {MessageService} from "primeng/api";
import {ToastService} from "../toast.service";
import {School} from "../school/school";
import {SchoolService} from "../school/school.service";
import { DialogService } from '../dialog.service';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  providers: [MessageService]
})
export class MapComponent implements AfterViewInit {
  public mapManager: ManageMap;

  public students: Student[] = [];
  public companies: Company[] = [];
  public schools: School[] = []
  private map?: L.Map;
  basicData: any;
  manageData = false;
  basicOptions: any;

  constructor(
    private studentService: StudentService,
    private companyService: CompanyService,
    private toastService: ToastService,
    private schoolService: SchoolService,
    manageMap: ManageMap,
    public dialogService: DialogService
  ) {
    this.mapManager = manageMap;
    this.manageData = dialogService.manageData
  }

  updateMap() {
  
  }

  initMap() {
    this.map = L.map('map').setView([42.392574068021005, -87.97722454804106], 10);
    const mapDiv = document.getElementById("map");

    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OSM Mapnik <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map!);


    const resizeObserver = new ResizeObserver(() => {
      this.map?.invalidateSize();
    });
    if (mapDiv) 
    resizeObserver.observe(mapDiv);

    this.mapManager.initMap(this.map)
  }

  handleShowToastEvent() {
    this.toastService.showToast('success', 'Toast Message', 'Message Content');
  }

  loadData() {
    forkJoin([
      // this.studentService.findAll(),
      this.companyService.findAll(),
      this.schoolService.findAll()

    ]).pipe(
      tap(([ companyData, schoolData]) => { // studentData
        // this.students = studentData;
        this.companies = companyData;
        this.schools = schoolData

        // this.mapManager.setStudentMarkers(studentData)
        this.mapManager.setCompanyMarkers(companyData)
        this.mapManager.setSchoolMarkers(schoolData)
      }),
      finalize(() => {
        if (this.map)
          this.mapManager.manageCompanyMarkers(this.companies);
        else
          console.error('Map is not initialized.');
      })
    ).subscribe(
      () => {
      },
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
