import {Marker} from "leaflet";
import {Field} from "../field/field";

export interface Student {
  id: number
  name: string,
  latitude: number,
  longitude: number,
  field: Field,
  marker: Marker | undefined
}
