import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import * as L from 'leaflet';
import * as _complete from "./content/_complete";
import { JerusalemData } from "./jerusalem-archeology.data";
import { MapPolygon } from "../../shared/maps/map-polygon";

@Component({
    selector: 'app-jerusalem-archeology',
    imports: [CommonModule],
    templateUrl: './jerusalem-archeology.component.html',
    styleUrl: './jerusalem-archeology.component.scss'
})
export class JerusalemArcheologyComponent implements OnInit {

    jerusalemData: JerusalemData[] = _complete.jerusalemData;
    map: L.Map | undefined;

    selectedData: JerusalemData | null = null;

    constructor() { }

    ngOnInit(): void {
      const center = [31.7767, 35.2355];

      const bounds = L.latLngBounds(
        [31.7767 - 0.0337, 35.2355 - 0.040], // southwest
        [31.7767 + 0.0337, 35.2355 + 0.040]  // northeast
      );

      this.map = L.map('map');
      this.map.fitBounds(bounds);
      this.map.setMaxZoom(20);
      this.map.setMinZoom(15);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(this.map);
    }

    selectData(data: JerusalemData): void {
      this.setArticleToShow(data);
      this.drawMapElements(data);
    }

    setArticleToShow(data: JerusalemData) {
      this.selectedData = data;
    }

    drawMapElements(data: JerusalemData) {
      for(let element of data.mapElements) {
        console.log(element);
        const latLngs = element.toMapPoints();
        console.log(JSON.stringify(latLngs));
        console.log(latLngs);
        L.polygon(latLngs, {color: "red"}).addTo(this.map!);
        
      }
    }

    isSelected(data: JerusalemData): boolean {
      return this.selectedData === data;
    }
}

