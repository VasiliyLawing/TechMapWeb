import {Circle, Marker} from "leaflet";

export interface Company {
  id: number,
  name: string,
  latitude: number,
  longitude: number,
  field: string,
  marker?: Marker,
  selected: Boolean,
  circles: Circle[]
}
