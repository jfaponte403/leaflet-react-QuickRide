import MapView from "../MapView/MapView.jsx";
import {useContext, useState} from "react";
import {Context} from "../Context/LocationContext.jsx";
import './CarMapSelector.css';

const CarMapSelector = () => {
    const {routeDistance} = useContext(Context);
    const [cost, setCost] = useState(null);

    const handleOptionSelect = (value) => {
        if(value === 'opc1'){
            setCost(3500);
            console.log(cost)
        }
        if(value === 'opc2'){
            setCost(5000)
            console.log(cost)
        }
    }

    return (
        <main className='main'>
            <MapView />
            <button className='button-option' onClick={()=> handleOptionSelect('opc1') }> Regular Car </button>
            <button className='button-option' onClick={()=> handleOptionSelect('opc2') }> Premium Car </button>
            <p className='final-text'>
                Distance: {routeDistance}km, Cost: ${cost*routeDistance}
            </p>
        </main>
  );
}

export default CarMapSelector;