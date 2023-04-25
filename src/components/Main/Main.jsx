import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../Home/Home.jsx";
import MapView from "../MapView/MapView.jsx";
import CarMapSelector from "../CarMapSelector/CarMapSelector.jsx";

const Main = () => {
  return (
      <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/map' element={<CarMapSelector />} />
            </Routes>
        </BrowserRouter>
      </div>
  );
}

export default Main;