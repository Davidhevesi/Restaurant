import React, { useEffect, useState } from "react";
import Restaurant from "./Restaurant";
import axios from "axios";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios
      .get("/api/restaurants.json")
      .then((resp) => setRestaurants(resp.data.data))
      .catch((resp) => console.log(resp));
  }, [restaurants.length]);
  const grid = restaurants.map((item) => {
    return (
      <Restaurant key={item.attributes.name} attributes={item.attributes} />
    );
  });

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 gap-6">{grid}</div>
    </div>
  );
};

export default Restaurants;
