import { citySearch, weatherSearch } from "../services/weatherService";

export const Search = ({
  searchField,
  setSearchField,
  setCityData,
  setWeather,
  setError,
}) => {
  const searchIt = async () => {
    const result = await citySearch(searchField);
    if (result) {
      setCityData(result);
      const weatherResult = await weatherSearch(result.Key);
      if (weatherResult) {
        setWeather(weatherResult);
      }
    } else {
      setError("No city found, please modify your search and try again");
      setTimeout(() => {
        setError(null);
      }, 10000);
    }
  };

  const updateSearchField = (e) => {
    e.preventDefault();
    const search = document.getElementById("searchInput").value.toLowerCase();
    setSearchField(search);
  };

  return (
    <div className="searchbar">
      <form
        onChange={(e) => updateSearchField(e)}
        onSubmit={(e) => {
          e.preventDefault();
          searchIt();
        }}
      >
        <input type="search" placeholder="Search" id="searchInput"></input>
      </form>
      <button
        className="search-button"
        onClick={() => {
          searchIt();
        }}
      >
        Search
      </button>
    </div>
  );
};
