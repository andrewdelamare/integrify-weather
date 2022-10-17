import { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = process.env.REACT_APP_MAP;

export const Map = ({ cityData }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(11);

  // initialize map
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  // update centerpoint of map on movement
  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  // when city data changes, centerpoint of map is updated and user flys to location 
  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    if (cityData) {
      map.current.flyTo({center: [cityData.GeoPosition.Longitude, cityData.GeoPosition.Latitude], essential: true, duration: 10000});
    }
  }, [cityData]);

  return <div ref={mapContainer} className="map-container" />;
};
