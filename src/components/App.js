import { useState } from "react";
import { Map } from "./Map";
import { Sidebar } from "./Sidebar";
import { locationSearch, weatherSearch } from "../services/weatherService";

const App = () => {
  const [cityData, setCityData] = useState(null);
  const [searchField, setSearchField] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [tried, setTried] = useState(null);

  const geoLocateClient = async () => {
    const loc = await locationSearch();
    if (loc) {
      const weatherData = await weatherSearch(loc.Key);
      setCityData(loc);
      setWeather(weatherData);
    }
  };
  // geolocate only once on initial load & prevent retry on rerenders
  if (!cityData && !tried) {
    setTried(true);
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
