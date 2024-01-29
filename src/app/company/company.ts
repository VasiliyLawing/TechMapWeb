import {Circle, Marker} from "leaflet";
import {Field} from "../field/field";

export interface Company {
  id: number,
  name: string,
  latitude: number,
  longitude: number,
  fields: Field[],
  marker: Marker | undefined
  selected: Boolean,
  circles: Circle[]

}
