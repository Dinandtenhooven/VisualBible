import { LatLngExpression } from "leaflet";
import { MapElement } from "./map-element";
import { MapPoint } from "./map-point";

export class MapPolygon extends MapElement {

  points: MapPoint[] = [];

  public toMapPoints(): LatLngExpression[] {
    return this.points.map(p => {
      return [p.x, p.y] as LatLngExpression;
    });
  }

  static create(points: MapPoint[]): MapPolygon {
    var mapPolygon = new MapPolygon();
    mapPolygon.points = points;

    return mapPolygon;
  }
}
