import {createContext, useState} from 'react';

export const Context = createContext(undefined);
export const ContextProvider = ({ children }) => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [pickup, setPickup] = useState({latitude: null, longitude: null});
    const [arrival, setArrival] = useState({latitude: null, longitude: null});
    const [routeDistance, setRouteDistance] = useState(null);

    return(
        <Context.Provider value={
            {
                latitude,
                setLatitude,
                longitude,
                setLongitude,
                pickup,
                setPickup,
                arrival,
                setArrival,
                routeDistance,
                setRouteDistance
            }
        }>
            {children}
        </Context.Provider>
    )
}