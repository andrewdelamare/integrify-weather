import { useEffect, useState } from "react";
import { Search } from "./Search";
import { Card } from "./Card";
export const Sidebar = ({
  cityData,
  setCityData,
  searchField,
  setSearchField,
  weather,
  setWeather,
  error,
  setError,
}) => {
  const [sidebarClassnames, setSC] = useState("sidebar");

  useEffect(() => {
    if (weather) {
      setSC("sidebar expanded");
    } else {
      setSC("sidebar");
    }
  }, [weather]);

  return (
    <div className={sidebarClassnames}>
      Search For A City's Weather Forcast
      <br />
      <div className="search-container">
        <Search
          cityData={cityData}
          searchField={searchField}
          setSearchField={setSearchField}
          setCityData={setCityData}
          setWeather={setWeather}
          setError={setError}
        />
        {error ? <div className="error">{error}</div> : null}
      </div>
      <h2>
        {cityData
          ? `${cityData.LocalizedName} ${cityData.Country.LocalizedName}`
          : null}
      </h2>
      {cityData && weather ? (
        <Card weather={weather} cityData={cityData} />
      ) : null}
    </div>
  );
};
