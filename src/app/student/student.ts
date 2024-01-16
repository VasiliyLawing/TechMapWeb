import {Marker} from "leaflet";

export interface Student {
  name: string,
  latitude: number,
  longitude: number,
  field: string,
  marker: Marker | undefined
}
