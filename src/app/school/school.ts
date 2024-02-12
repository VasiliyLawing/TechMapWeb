import {Marker} from "leaflet";

export interface School {
    id: number,
    name: string,
    latitude: number,
    longitude: number,
    marker: Marker
}

export interface NewSchool {
    name: string,
    latitude: number,
    longitude: number,
}