import { map } from "leaflet";
import { JerusalemData } from "../jerusalem-archeology.data";
import { MapPolygon } from "../../../shared/maps/map-polygon";
import { MapPoint } from "../../../shared/maps/map-point";

export const MountOfOlives: JerusalemData = {
    id: "mount-of-olives-jerusalem-map",
    title: 'Mount of Olives',
    article: {
        "content": 
            `The mount of olives is the location of many historical events 
            in the old and the new testament. It is the location of an old jewish cemetary.
            People have been buried here for approximately 3.000 years. 

            At the foot of the mountain is the garden of getsemane. 
        `,
        "bibleReferences": [
            "2SA.15.30",
            "ZEC.14.4",
            "MAT.21.1",
            "LUK.22.39",
            "ACT.1.12",
        ]
    },
    mapElements: [
        MapPolygon.create([
            MapPoint.create(31.777845, 35.245585),
            MapPoint.create(31.777845, 35.245787),
            MapPoint.create(31.778047, 35.245787),
            MapPoint.create(31.778047, 35.245585),
        ]),
        MapPolygon.create([
            // Northwest / northern base
            MapPoint.create(31.786996749880164, 35.242253699759424),
            MapPoint.create(31.788344768681032, 35.24965657516763),

            // Northeast
            // MapPoint.create(31.7885, 35.2500),
            // MapPoint.create(31.7865, 35.2580),

            // // Eastern base (Bethany side – further east)
            // MapPoint.create(31.7825, 35.2630),
            // MapPoint.create(31.7780, 35.2645),
            // MapPoint.create(31.7740, 35.2635),

            // // Southeast
            // MapPoint.create(31.7715, 35.2600),

            // // Southern base
            // MapPoint.create(31.7700, 35.2520),
            // MapPoint.create(31.7705, 35.2440),

            // // Southwest (toward Silwan)
            // MapPoint.create(31.7728, 35.2385),
            // MapPoint.create(31.7765, 35.2379),

            // // Western base (Kidron Valley side)
            // MapPoint.create(31.7792, 35.2385),
            // MapPoint.create(31.7823, 35.2397),
            // MapPoint.create(31.7865, 35.2405),
            MapPoint.create(31.7895, 35.2410),
        ], "blue")
    ]
}

// The exact top of the Mount of Olives (highest point) is generally identified at approximately 31°46′42″N 35°14′38″E (or 31.777946, 35.245686)