import { map } from "leaflet";
import { JerusalemData } from "../jerusalem-archeology.data";
import { MapPolygon } from "../../../shared/maps/map-polygon";
import { MapPoint } from "../../../shared/maps/map-point";

export const GardenOfGetsemane: JerusalemData = {
    id: "garden-getsemane-jerusalem-map",
    title: 'The garden of Getsemane',
    article: {
        
        "content": `
            The garden of getsemane is located at the foot of the mount of olives.
            According to the gospels, this were Jesus was praying right before being betrayed
            and captured by the Roman soldiers.


        `,
        "bibleReferences": [
            "MAT.26.36",
            "MAR.14.32",
            "LUK.22.29"
        ]
    },
    mapElements: [
        MapPolygon.create([
            MapPoint.create(31.77924,35.23961),
            MapPoint.create(31.77924,35.23911),
            MapPoint.create(31.78024,35.23911),
            MapPoint.create(31.78024,35.23961),
        ])
    ]
}
