import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});


function ManhattanPizza(props) {
    const [restaurantInfo, setRestaurantInfo] = useState("");

    useEffect(() => {
      fetch("/api/manhattan-pizza")
        .then((res) => res.json())
        .then((obj) => {
          setRestaurantInfo(obj);
        });
    }, []);
    console.log(restaurantInfo);
    return (
      <div id="restaurantBody">
        <h1>{restaurantInfo.name}</h1>
        <h3>{restaurantInfo.address}</h3>
        <h3>{restaurantInfo.phoneNumber}</h3> 
        <h3>{restaurantInfo.hours}</h3>
        
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
          <Marker
            position={[restaurantInfo.lat, restaurantInfo.lon]}
            icon={DefaultIcon}
          >
            <Popup>{restaurantInfo.name}</Popup>
          </Marker>
        </MapContainer>
      </div>
    );
  }

export default ManhattanPizza