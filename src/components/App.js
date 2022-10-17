import { useState } from "react";
import { Map } from "./Map";
import { Sidebar } from "./Sidebar";
import { helsinki } from "../services/misc";

const App = () => {
  const [cityData, setCityData] = useState(helsinki);
  const [searchField, setSearchField] = useState("");
  const [weather, setWeather] = useState();

  return (
    <div className="App">
      <Sidebar
        cityData={cityData}
        searchField={searchField}
        setSearchField={setSearchField}
        setCityData={setCityData}
        setWeather={setWeather}
      />
      <Map cityData={cityData} />
    </div>
  );
};

export default App;
