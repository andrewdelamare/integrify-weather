import { citySearch } from "../services/weatherService";

export const Search = ({ searchField, setSearchField, setCityData }) => {
  const searchIt = async () => {
    const result = await citySearch(searchField);
    if (result) {
      setCityData(result);
    } else {
      console.log("No City Found");
    }
  };

  const setIt = (e) => {
    e.preventDefault();
    const search = document.getElementById("searchInput").value.toLowerCase();
    setSearchField(search);
  };

  return (
    <div className="searchbar">
      <form
        onChange={(e) => setIt(e)}
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
