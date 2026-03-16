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
            // north
            MapPoint.create(31.78967294987703, 35.24479243985327),
            MapPoint.create(31.78967294987703, 35.24965657516763),
            
            // north east bubble
            MapPoint.create(31.788323792636145, 35.25033699806935),
            MapPoint.create(31.788123130583475, 35.252182363180886),
            MapPoint.create(31.788186948215653, 35.252890475465136),
            MapPoint.create(31.787776552216727, 35.25336253103103),
            MapPoint.create(31.78716554558857, 35.253212299131896),
            MapPoint.create(31.78672782828149, 35.25250418012155),
            MapPoint.create(31.78567908783429, 35.252064269784704),

            // east side
            MapPoint.create(31.78473064994188, 35.250015115401546),
            MapPoint.create(31.783672740417444, 35.2477835370064),
            MapPoint.create(31.782168258786353, 35.24784316049817),
            MapPoint.create(31.78068240933186, 35.24885109046331),
            MapPoint.create(31.779966585999876, 35.24997382810342),
            
            // south east bubble            
            MapPoint.create(31.77920731793442, 35.25003764307892),
            MapPoint.create(31.77882771192617, 35.24993556580461),
            MapPoint.create(31.778155269244703, 35.249540037621166),
            MapPoint.create(31.777667208826593, 35.248825555999616),
            MapPoint.create(31.777558753014077, 35.24779212148211),
            
            // south bubble
            MapPoint.create(31.77742349490395, 35.24649368053934),
            MapPoint.create(31.777325088228853, 35.246246930526276),
            MapPoint.create(31.776574869052, 35.245843765991665),
            MapPoint.create(31.775955735869836, 35.246071340887276),
            MapPoint.create(31.77503994986492, 35.24561613906803),
            MapPoint.create(31.774085465362653, 35.245115428826125),
            MapPoint.create(31.77461431885097, 35.243658880275284),
            MapPoint.create(31.775181852014946, 35.24261197582342),
            MapPoint.create(31.77679416682071, 35.243006455734545),
            
            // south west nose
            MapPoint.create(31.778387800539065, 35.2427392778367),
            MapPoint.create(31.77939387009495, 35.24283032702598),
            MapPoint.create(31.779780819502708, 35.2429517166937),
            MapPoint.create(31.78028385136105, 35.24336140037238),
            
            MapPoint.create(31.781856536015553, 35.243005505007346),
            MapPoint.create(31.783133382460775, 35.24223302629244),
            MapPoint.create(31.784063655462656, 35.24186823783683),
            // 31.781856536015553, 35.243005505007346
            // 31.783133382460775, 35.24223302629244
            // 31.784063655462656, 35.24186823783683
            
            MapPoint.create(31.786996749880164, 35.242253699759424),
            MapPoint.create(31.788591800284546, 35.244899420488956),
        ], "blue")
    ]
}

// The exact top of the Mount of Olives (highest point) is generally identified at approximately 31°46′42″N 35°14′38″E (or 31.777946, 35.245686)