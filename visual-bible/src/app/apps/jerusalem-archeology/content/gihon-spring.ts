import { map } from "leaflet";
import { JerusalemData } from "../jerusalem-archeology.data";
import { MapPolygon } from "../../../shared/maps/map-polygon";
import { MapPoint } from "../../../shared/maps/map-point";

export const GihonSpring: JerusalemData = {
    title: 'Gihon Spring',
    article: {
        "id": "gihon-spring-jerusalem-map",
        "content": "The Gihon Spring is the main water source for ancient Jerusalem. It is located on the eastern slope of the City of David, and it is believed to have been the source of water for the city since its earliest days. The spring is mentioned several times in the Bible, including in 2 Chronicles 32:30 and 2 Kings 20:20.",
        "bibleReferences": [
            "2CH.32.30",
            "2KI.20.20"
        ]
    },
    mapElements: [
        MapPolygon.create([
            MapPoint.create(31.7732, 35.2368),
            MapPoint.create(31.7732, 35.2378),
            MapPoint.create(31.7742, 35.2378),
            MapPoint.create(31.7742, 35.2368),
        ])
    ]
}