import { useEffect, useState } from "react";
import { Map } from "./Map";
import { Sidebar } from "./Sidebar";
import { helsinki, helWeather } from "../services/misc";
import { locationSearch, weatherSearch } from "../services/weatherService";

const App = () => {
  const [cityData, setCityData] = useState(null);
  const [searchField, setSearchField] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const geoLocateClient = async () => {
    const loc = await locationSearch();
    const weatherData = await weatherSearch(loc.Key);
    setCityData(loc);
    setWeather(weatherData);
  };
  if (!cityData) {
    geoLocateClient();
  }

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
