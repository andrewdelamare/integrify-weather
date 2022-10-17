import { useState } from "react";
import Map from "./Map";
import Sidebar from "./Sidebar";

function App() {
const [cityData, setCityData] = useState({lng:0, lat:0});
const [searchField, setSearchField] = useState();
const [weather, setWeather] = useState();

  return (
    <div className="App">
      <Sidebar cityData={cityData} searchField={searchField} setSearchField={setSearchField} />
      <Map cityData={cityData}  />
    </div>
  );
}

export default App;
