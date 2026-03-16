import { Article } from "../../shared/types/article";
import { MapElement } from "../../shared/maps/map-element";
import { MapPolygon } from "../../shared/maps/map-polygon";

export class JerusalemData {
  id: string = '';
  title: string = '';
  article: Article | null = null;
  mapElements: MapPolygon[] = [];
}
