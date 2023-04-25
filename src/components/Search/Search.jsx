import {useContext, useState} from "react";
import {Context} from "../Context/LocationContext.jsx";
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import L from "leaflet";
import './Search.css'
import {useNavigate} from "react-router-dom";
const Search = () => {

    const {pickup, setPickup, arrival, setArrival, setRouteDistance, routeDistance} = useContext(Context)
    const [resultsArrival, setResultsArrival] = useState([]);

    const navigate = useNavigate();
    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    const showPosition = (position) => {
        setPickup({
            longitude: position.coords.longitude,
            latitude: position.coords.latitude
        });

        // setLatitude(position.coords.latitude);
        // setLongitude(position.coords.longitude);

    }

    const handleSearchArrival = async (event) => {
        event.preventDefault();
        const provider = new OpenStreetMapProvider();
        const query = event.target.value;
        const results = await provider.search({ query });
        if (results.length > 0) {
            const resultFilter = results.filter(result => result.label.includes("Bogotá"))
            setResultsArrival(resultFilter);
        }
    };

    const handleSendData = (event) => {
        event.preventDefault();

        getLocation();

        setArrival({
            longitude: resultsArrival[0].x,
            latitude: resultsArrival[0].y
        });

        const firstPlace = L.latLng(pickup.longitude, pickup.latitude);
        const secondPlace = L.latLng(arrival.longitude, arrival.latitude);
        const newDistance = firstPlace.distanceTo(secondPlace) / 1000;

        setRouteDistance(newDistance.toFixed(2));
        console.log({
            pickup: pickup,
            arrival: arrival,
            distance: routeDistance
        });

        navigate('/map');
    }

    return (
        <div className='search-main'>
            <form className='search-form'>
                <input type="text" className='search-input' placeholder="Where to?" onChange={handleSearchArrival} />
                <button className='search-btn' onClick={handleSendData}> FIND BEST ROUTE </button>
            </form>
            <ul className='search-results'>
                <p className='search-places'>Places:</p>
                {resultsArrival.map((result) => (
                    <li className='search-result' key={result.label}>{result.label}</li>
                ))}
            </ul>
        </div>
    );
}

export default Search;