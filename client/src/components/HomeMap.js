import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
/* code for the default icon from leaflet */
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

function HomeMap({ restaurantsId }) {
  /* state of the default centering for the map */
  const [center, setCenter] = useState([44.4759, -73.2121]);
/* state for the information used to make the map markers. */
/* could maybe have just been an empty array */
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    /* set up a for of loop to iterate over all of the restaurant ids */
    for (let restaurantId of restaurantsId) {
      /* fetch all of the info related to the restaurant's id */
      fetch(`/api/${restaurantId}`)
        .then((res) => res.json())
        .then((obj) => {
          /* add each restaurant's relevant info to the marker state*/
          markers.push({ name: obj.name, id: obj.id, position: [obj.lat, obj.lon] });
        });
    }
  });

  return (
    <div id="mapContainer">
      <MapContainer
        className="mainMap"
        center={center}
        zoom={15}
        style={{ height: "80vh" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
{/* .map over all of the objects in the marker state */}
        {markers.map((marker, index) => (
          /* for each one create a new Marker element */
          /* use the info from the fetch to make each marker */
          <Marker key={index} position={marker.position} icon={DefaultIcon}>
            {/* inside each popup is a Link that will send the user to that restaurant's page */}
   <Popup><div><Link to={`/restaurants/${marker.id}`}>{marker.name}</Link></div></Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
export default HomeMap;
