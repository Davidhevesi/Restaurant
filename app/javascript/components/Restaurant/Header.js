import React from "react";
import styled from "styled-components";
import Rating from "../Rating/Rating";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Header = (props) => {
  const { name, image_url, avg_score } = props.attributes;
  const total = props.reviews.length;

  return (
    <div className="m-12">
      <h1 className="h-24 w-24 border-3xl border-solid">
        <Link to={"/"}>
          <img className="rounded-full" src={image_url} alt={name} />

          <div className="pb-4 font-mono font-bold">{name}</div>
        </Link>
      </h1>
      <div>
        <div className="pt-6">{ total} Reviews</div>
        <Rating className="font-large" score={avg_score}>
          out of 5 stars
        </Rating>
      </div>
    </div>
  );
};

export default Header;
