import { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
/* code for the default Icon of leaflet */
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

function Restaurant(props) {
  /* set up state for all of the restaurant's info */
  const [restaurantInfo, setRestaurantInfo] = useState({
    lat: 44.4779367,
    lon: -73.2123951,
  });
  /* set up state to center the map */
  const [restaurantLatLng, setRestaurantLatLng] = useState([
    props.lat,
    props.lon,
  ]);
  const [map, setMap] = useState(null);
  const [center, setCenter] = useState([44.4759, -73.2121]);

  useEffect(() => {
    /* fetch the restaurant's info from the "database" */
    /* uses the prop passed to it to fetch the correct restaurant depending on which marker was clicked */
    fetch(`/api/${props.restaurantName}`)
      .then((res) => res.json())
      .then((obj) => {
        /* set the state of the restaurant info */
        setRestaurantInfo(obj);
      });
  }, []);

  return (
    /* div set up for the bulk of the restaurant page */
    <div id="restaurantBody">
      {/* the restaurant's basic info displayed on the page */}
      <h1>{restaurantInfo.name}</h1>
      <h3>{restaurantInfo.address}</h3>
      <h3>{restaurantInfo.phoneNumber}</h3>
      <h3>{restaurantInfo.hours}</h3>
      <h2>{restaurantInfo.notes}</h2>
      {/* map centered on the restaurant */}
      <MapContainer
        className="restaurantMap"
        center={restaurantLatLng}
        whenCreated={setMap}
        zoom={20}
        style={{ height: "80vh" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* marker of the the restaurant's location */}
        <Marker
          position={[restaurantInfo.lat, restaurantInfo.lon]}
          icon={DefaultIcon}
        >
          {/* show the restaurant's name when the marker is clicked */}
          <Popup>{restaurantInfo.name}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Restaurant;
