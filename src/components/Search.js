import { citySearch, weatherSearch } from "../services/weatherService";

export const Search = ({
  searchField,
  setSearchField,
  setCityData,
  setWeather,
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
      console.log("No City Found");
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
    </div>
  );
};
