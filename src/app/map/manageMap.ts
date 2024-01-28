import {Injectable} from '@angular/core';
import * as L from 'leaflet';
import {Circle, LatLng, LayerGroup, Marker} from 'leaflet';
import {Student} from '../student/student';
import {Company} from '../company/company';


@Injectable({
  providedIn: 'root'
})
export class ManageMap {

  private static careerMarkers: Map<string, Array<Marker>> = new Map();
  public radius: number = 8046.72;
  public mile = 0.0144927536231884
  private companyIcon = L.icon({
    iconUrl: 'assets/factory.png',
    iconSize: [38, 38],
    iconAnchor: [22, 37],
    popupAnchor: [-3, -19]
  });
  private studentIcon = L.icon({
    iconUrl: 'assets/user.png',
    iconSize: [38, 38],
    iconAnchor: [22, 37],
    popupAnchor: [-3, -19]
  });
  private layerControl = L.control.layers();
  private layers: Map<string, LayerGroup> = new Map();
  private map?: L.Map;

  public initMap(map: L.Map): void {
    this.map = map;
  }
  addCircles(company: Company) {
    company.circles = [
      this.createCircle(company.marker!.getLatLng(), this.radius, '5 Miles'),
      this.createCircle(company.marker!.getLatLng(), this.radius / 2, '2.5 Miles', 'yellow'),
      this.createCircle(company.marker!.getLatLng(), this.radius / 5, '1 Mile', 'red')
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
      //
      // if (!ManageMap.careerMarkers.has(student.field)) {
      //   ManageMap.careerMarkers.set(student.field, [marker]);
      // } else {
      //   ManageMap.careerMarkers.get(student.field)?.push(marker);
      // }
    });
  }

  public setCompanyMarkers(companies: Company[]): void {
    companies.forEach(company => {
      const marker = L.marker([company.latitude, company.longitude], {icon: this.companyIcon});


      if (this.map)
        marker.addTo(this.map)
      // if (!ManageMap.careerMarkers.has(company.field)) {
      //   ManageMap.careerMarkers.set(company.field, [marker]);
      // } else {
      //   ManageMap.careerMarkers.get(company.field)?.push(marker);
      // }
      company.marker = marker;
    });
  }

  public setLayers(map: L.Map): void {
    Array.from(ManageMap.careerMarkers.entries()).forEach(([name, markers]) => {
      let layerExists = false

      this.layers.forEach((_value, key) => {
        if (name==key) {
          layerExists = true
        }
      })
      if (!layerExists) {
        const layerGroup = new L.LayerGroup(markers);
        this.layers.set(name, layerGroup);
        this.layerControl.addOverlay(layerGroup, name);
      }
    });

    this.layerControl.addTo(map);
  }

  public manageCompanyMarkers(map: L.Map, companies: Company[]): void {
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

    this.getSelectedCompanies(companies).forEach(company => {

      students.forEach(student => {
        if (company.field == student.field && company.selected) {

          let studentLocation = new LatLng(student.latitude, student.longitude)
          let companyLocation = new LatLng(company.latitude, company.longitude)

          if (this.calculateDistance(studentLocation, companyLocation) < this.mile * 5) {
            eligibleStudents.push(student)
          }

        }
      })
    })
    return eligibleStudents
  }

  private createCircle(latlng: L.LatLngExpression, radius: number, popupText: string, fillColor: string = 'blue'): Circle {
    return L.circle(latlng, {radius}).addTo(this.map!).bindPopup(`${popupText}`).openPopup().setStyle({fillColor});
  }

  private calculateDistance(posOne: LatLng, posTwo: LatLng) {
    const latDistance = Math.abs(Math.abs(posOne.lat) - Math.abs(posTwo.lat))
    const lngDistance = Math.abs(Math.abs(posOne.lng) - Math.abs(posTwo.lng))
    return latDistance + lngDistance
  }

}
