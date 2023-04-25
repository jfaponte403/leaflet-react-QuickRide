import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MapView.css';
import { Context } from "../Context/LocationContext.jsx";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet/dist/leaflet.css";
import {useContext, useEffect, useRef} from "react";
import Search from "../Search/Search.jsx";

import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from "react-leaflet";
import RoutingMachine from "../RoutingMachine/RoutingMachine.jsx";



// -74.14513287847939, 4.619071699999999
// -74.06328049734677, 4.61427645
const MapView = () => {

    const { latitude, longitude, pickup, arrival, routeDistance} = useContext(Context);

    const mapCenter = latitude && longitude ? [latitude, longitude] : [4.5794889114280375, -74.15751189874663];

    return (
        <div className='map-main'>
            <MapContainer center={mapCenter} zoom={13} scrollWheelZoom={false} className='map-main' whenCreated={mapInstance => mapRef.current = mapInstance}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {pickup.latitude && pickup.longitude && (
                    <Marker position={[pickup.latitude, pickup.longitude]}>
                        <Popup>
                            You're here
                        </Popup>
                    </Marker>
                )}

                {arrival.latitude && arrival.longitude && (
                    <Marker position={[arrival.latitude, arrival.longitude]}>
                        <Popup>
                            arrival
                        </Popup>
                    </Marker>
                )}
                <RoutingMachine />
            </MapContainer>
        </div>
    );
}

export default MapView;
