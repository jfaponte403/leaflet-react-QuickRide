// import React, { useEffect, useRef } from 'react';
// import L from 'leaflet';
// import 'leaflet-routing-machine';
//
// function Test() {
//     const mapRef = useRef(null);
//     const start = L.latLng(40.416775, -3.703790); // Punto de inicio
//     const end = L.latLng(41.385063, 2.173404); // Punto de llegada
//
//     useEffect(() => {
//         const map = L.map(mapRef.current).setView([40.416775, -3.703790], 13); // Inicializar el mapa en Madrid
//         L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//             attribution: '&copy; OpenStreetMap contributors'
//         }).addTo(map);
//
//         // Agregar el control de la ruta
//         L.Routing.control({
//             waypoints: [start, end],
//             router: L.Routing.osrmv1({
//                 serviceUrl: 'http://router.project-osrm.org/route/v1'
//             })
//         }).addTo(map);
//     }, []);
//
//     return (
//         <div ref={mapRef} style={{ height: '500px' }} />
//     );
// }
//
// export default Test;
