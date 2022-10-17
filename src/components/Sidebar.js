
export default function Sidebar ({ cityData, searchField, setSearchField }) {

  return (
      <div className="sidebar">
        Longitude: {cityData.lng} | Latitude: {cityData.lat}
      </div>
  )
}