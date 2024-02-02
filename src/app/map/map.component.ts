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
  private map?: L.Map;
  basicData: any;

  basicOptions: any;

  constructor(
    private studentService: StudentService,
    private companyService: CompanyService,
    private toastService: ToastService,
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

  handleShowToastEvent() {
    this.toastService.showToast('success', 'Toast Message', 'Message Content');
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
          // this.mapManager.setLayers(this.map);
          this.mapManager.manageCompanyMarkers(this.companies);
        } else {
          console.error('Map is not initialized.');
        }
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









    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.basicData = {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [
        {
          label: 'Sales',
          data: [540, 325, 702, 620],
          backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
          borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
          borderWidth: 1
        }
      ]
    };

    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };




    }











}
