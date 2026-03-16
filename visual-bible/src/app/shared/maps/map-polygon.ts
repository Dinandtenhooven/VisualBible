import { LatLngExpression, map } from "leaflet";
import { MapElement } from "./map-element";
import { MapPoint } from "./map-point";

export class MapPolygon extends MapElement {

  color: string = "red";
  points: MapPoint[] = [];

  public toMapPoints(): LatLngExpression[] {
    return this.points.map(p => {
      return [p.x, p.y] as LatLngExpression;
    });
  }

  static create(points: MapPoint[], color: string = "red"): MapPolygon {
    var mapPolygon = new MapPolygon();
    mapPolygon.points = points;
    mapPolygon.color = color;

    return mapPolygon;
  }
}
