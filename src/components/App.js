import { useState } from "react";
import { Map } from "./Map";
import { Sidebar } from "./Sidebar";
import { helsinki, helWeather } from "../services/misc";

const App = () => {
  const [cityData, setCityData] = useState(null);
  const [searchField, setSearchField] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  return (
    <div className="App">
      <Sidebar
        cityData={cityData}
        searchField={searchField}
        setSearchField={setSearchField}
        setCityData={setCityData}
        weather={weather}
        setWeather={setWeather}
        error={error}
        setError={setError}
      />
      <Map cityData={cityData} />
    </div>
  );
};

export default App;
