// © 2024 Vasiliy Lawing

import {Injectable} from '@angular/core';
import * as L from 'leaflet';
import {Circle, LatLng} from 'leaflet';
import {Student} from '../student/student';
import {Company} from '../company/company';


@Injectable({
  providedIn: 'root'
})
export class ManageMap {

  private companyIcon = L.icon({
    iconUrl: 'assets/factory.png',
    iconSize: [38, 38],
    iconAnchor: [22, 37],
    popupAnchor: [-3, -19]
  });
  private studentIcon = L.icon({
    iconUrl: 'assets/user.png',
    iconSize: [38/3, 38/3],
    iconAnchor: [22/3, 37/3],
    popupAnchor: [-3/3, -19/3]
  });
  private map?: L.Map;

  public initMap(map: L.Map): void {
    this.map = map;
  }
  addCircles(company: Company) {
    let fiveMileRadius: number = 8046.72;

    company.circles = [
      this.createCircle(company.marker!.getLatLng(), fiveMileRadius, '5 Miles'),
      this.createCircle(company.marker!.getLatLng(), fiveMileRadius * 2, '10 Miles', 'yellow'),
      this.createCircle(company.marker!.getLatLng(), fiveMileRadius * 3, '15 Miles', 'red')
    ];
    company.selected = true;
  }
  removeCircles(company: Company) {
    company.selected = false;
    company.circles.forEach(circle => this.map?.removeLayer(circle));
    company.circles = [];
  }

  public setStudentMarkers(students: Student[] | undefined): void {
    students?.forEach(student => {
      const marker = L.marker([student.latitude, student.longitude], {icon: this.studentIcon}).bindPopup(
        `<h1>${student.name}</h1><h4>Longitude: ${student.longitude}</h4><h4>Latitude: ${student.latitude}</h4>`
      );
      if (this.map)
        marker.addTo(this.map)
      student.marker = marker
    });
  } // TODO: Set School Markers

  public setCompanyMarkers(companies: Company[]): void {
    companies.forEach(company => {
      const marker = L.marker([company.latitude, company.longitude], {icon: this.companyIcon});
      if (this.map)
        marker.addTo(this.map)
      company.marker = marker;
    });
  }


  public manageCompanyMarkers(companies: Company[]): void {
    companies.forEach(company => {
      company.marker?.on('click', () => {
        if (company.selected) {
          this.removeCircles(company)
          company.selected = false
        } else {
          this.addCircles(company)
          company.selected = true
        }
      });
    });
  }

  public selectCompany(companies: Company[], selectedCompany: number) {
    companies.forEach(company => {
      if (company.id == selectedCompany && !company.selected) {

        company.selected = true

        this.addCircles(company)
      }
    })
  }
  public unselectCompany(companies: Company[], selectedCompany: number) {
    companies.forEach(company => {
      if (company.id == selectedCompany) {
        company.selected = false
        this.removeCircles(company)
      }
    })

  }


  public getSelectedCompanies(companies: Company[]): Company[] {
    let selectedCompanies: Company[] = []

    companies.forEach(company => {
      if (company.selected) {
        selectedCompanies.push(company)
      }
    });

    return selectedCompanies
  }

  public returnEligibleStudents(companies: Company[], students: Student[]) {
    let eligibleStudents: Student[] = []
    let mile = 0.0144927536231884

    this.getSelectedCompanies(companies).forEach(company => {

      students.forEach(student => {
        company.fields.forEach(field => {
          if (field.id == student.field.id && company.selected) {

            let studentLocation = new LatLng(student.latitude, student.longitude)
            let companyLocation = new LatLng(company.latitude, company.longitude)

            if (this.calculateDistance(studentLocation, companyLocation) < mile * 15) {
              eligibleStudents.push(student)
            }

          }
        })

      })
    })
    return eligibleStudents
  } // TODO: Return Eligible Schools

  private createCircle(latlng: L.LatLngExpression, radius: number, popupText: string, fillColor: string = 'blue'): Circle {
    return L.circle(latlng, {radius}).addTo(this.map!).bindPopup(`${popupText}`).setStyle({fillColor});
  }

  private calculateDistance(posOne: LatLng, posTwo: LatLng) {
    const latDistance = Math.abs(Math.abs(posOne.lat) - Math.abs(posTwo.lat))
    const lngDistance = Math.abs(Math.abs(posOne.lng) - Math.abs(posTwo.lng))
    return latDistance + lngDistance
  }

}
