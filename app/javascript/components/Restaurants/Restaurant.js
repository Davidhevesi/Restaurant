import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Rating from "../Rating/Rating";
const Restaurant = (props) => {
  const { name, image_url, slug, avg_score } = props.attributes;

  return (
    <div>
      <div className="">
        <img className="rounded-lg pt-12" src={image_url} alt={name} />
      </div>
      <div className="bg-gray-200 rounded-xl p-6 -mt-3">
        <h2 className="text-2xl font-bold mb-2">{name}</h2>
        <div className="text-gray-800 leading-relaxed mb-6">
          <Rating score={avg_score} />
        </div>

        <Link to={`/restaurants/${slug}`}>
          <button
            type="submit"
            className="cursor-pointer uppercase bg-blue-400 hover:bg-orange-500 shadow-xl px-5 py-2 inline-block font-bold text-orange-100 hover:text-white rounded"
          >
            Review Restaurant
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Restaurant;
