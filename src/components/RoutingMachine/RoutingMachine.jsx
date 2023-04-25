import {useContext, useEffect} from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";
import {Context} from "../Context/LocationContext.jsx";

L.Marker.prototype.options.icon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"
});




// 4.619071699999999, -74.14513287847939
// 4.61427645, -74.06328049734677

export default function Routing() {

    const {pickup, arrival} = useContext(Context);

    const map = useMap();

    console.log({pickup: pickup, arrival: arrival})

    const pickupLanLng = pickup.latitude && pickup.longitude ? [pickup.latitude, pickup.longitude] : [4.5794889114280375, -74.15751189874663];

    console.log(pickupLanLng);



    useEffect(() => {
        if (!map) return;

        const routingControl = L.Routing.control({
            waypoints: [
                L.latLng(pickup.latitude, pickup.longitude),
                L.latLng(arrival.latitude, arrival.longitude)
            ],
            routeWhileDragging: true
        }).addTo(map);

        return () => map.removeControl(routingControl);
    }, [map, pickup, arrival]);

    return null;
}