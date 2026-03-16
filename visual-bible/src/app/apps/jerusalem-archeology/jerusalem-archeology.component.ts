import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import * as L from 'leaflet';
import * as _complete from "./content/_complete";
import { JerusalemData } from "./jerusalem-archeology.data";
import { MapPolygon } from "../../shared/maps/map-polygon";
import { BibleReferenceComponent } from "../../shared/bible-reference/bible-reference.component";
import { MentionComponent } from "../../shared/mention/mention.component";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Component({
    selector: 'app-jerusalem-archeology',
    imports: [
      CommonModule,
      BibleReferenceComponent,
      MentionComponent
    ],
    templateUrl: './jerusalem-archeology.component.html',
    styleUrl: './jerusalem-archeology.component.scss'
})
export class JerusalemArcheologyComponent implements OnInit {

    jerusalemData: JerusalemData[] = _complete.jerusalemData;
    map: L.Map | undefined;

    selectedData: JerusalemData | null = null;
    htmlSnippet: SafeHtml | null = null;

    private polygons: Map<string, L.Polygon> = new Map();

    constructor(private sanitizer: DomSanitizer) { }

    ngOnInit(): void {
      const bounds = L.latLngBounds(
        [31.7767 - 0.0337, 35.2355 - 0.040], // southwest
        [31.7767 + 0.0337, 35.2355 + 0.040]  // northeast
      );

      this.map = L.map('map');
      this.map.fitBounds(bounds);
      this.map.setMaxZoom(19);
      this.map.setMinZoom(15);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(this.map);

      this.setMentionText();
    }

    selectData(data: JerusalemData): void {
      this.setArticleToShow(data);
      this.drawMapElements(data);
    }

    setArticleToShow(data: JerusalemData) {
      this.selectedData = data;
    }

   drawMapElements(data: JerusalemData) {
      if (this.layerExists(data.id)) {
        return;
      }

      for (let element of data.mapElements) {
        this.drawPolygon(element, data.id);
      }
    }

    drawPolygon(element: MapPolygon, id: string) {
      const latLngs = element.toMapPoints();
      const polygon = L.polygon(latLngs, { color: element.color })
        .addTo(this.map!);

      // store polygon using identifier
      this.polygons.set(id, polygon);
    }

    isSelected(data: JerusalemData): boolean {
      return this.selectedData === data;
    }

    layerExists(id: string): boolean {
      return this.polygons.has(id);
    }
    
    setMentionText() {
      var safeHtml = this.sanitizer.bypassSecurityTrustHtml(
        `
          Considering the projection type of the map, there is at most a 8 mm difference.
          That is a very acceptable difference considering accuracy.
          Read <a href="#/explanations/earth-curvature">this</a> article for an explanation.
        `
      );

      this.htmlSnippet = safeHtml;
    }
}

