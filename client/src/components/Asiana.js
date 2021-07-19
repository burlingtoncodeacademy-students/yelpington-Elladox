import { useEffect, useState } from "react";
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

function Asiana(props) {
    /* set up state for all of the restaurant's info */
  const [restaurantInfo, setRestaurantInfo] = useState("");

  useEffect(() => {
      /* fetch the restaurant's info from the "database" */
      /* if I had more time I could likely have set this up to programmatically fetch the restaurant's id rather than hardcoding it  */
    fetch("/api/asiana")
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
      {/* map centered on the restaurant */}
      <MapContainer
        className="restaurantMap"
        center={[restaurantInfo.lat, restaurantInfo.lon]}
        zoom={20}
        style={{ height: "80vh" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* marker of the the restaurant's locaiton */}
        <Marker
          position={[restaurantInfo.lat, restaurantInfo.lon]}
          icon={DefaultIcon}
        >
            {/* show the restauran's name when the marker is clicked */}
          <Popup>{restaurantInfo.name}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Asiana;
