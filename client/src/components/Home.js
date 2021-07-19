import HomeMap from "./HomeMap";
import { useEffect, useState } from "react";
function Home(props) {
  /* set up state for the index of restaurant ids */
  const [restaurantsId, setRestaurantsID] = useState("");
  /* fetch the index from the "database" */
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((obj) => {
        setRestaurantsID(obj);
      });
  }, []);

  return (
    <div id="restaurantBody">
      {/* send the id's as a prop to the home page map */}
      <HomeMap restaurantsId={restaurantsId} />
    </div>
  );
}

export default Home;
