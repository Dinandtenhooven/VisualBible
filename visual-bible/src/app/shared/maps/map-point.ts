import { MapElement } from "./map-element";

export class MapPoint extends MapElement {

    static create(x: number, y: number): MapPoint {
        return {
            x: x,
            y: y
        } as MapPoint;
    }
}
