import {Marker} from "leaflet";

export interface Student {
  id: number
  name: string,
  latitude: number,
  longitude: number,
  field: string,
  marker: Marker | undefined
}
