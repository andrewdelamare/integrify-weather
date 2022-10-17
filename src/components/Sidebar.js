import { Search } from "./Search";
export const Sidebar = ({ cityData, setCityData, searchField, setSearchField }) => {
  return (
    <div className="sidebar">
      Search For Your City's Weather Forcast
      <br />
      --------------------------------------
      <Search 
        cityData={cityData}
        searchField={searchField}
        setSearchField={setSearchField}
        setCityData={setCityData}
      />
    </div>
  );
};
