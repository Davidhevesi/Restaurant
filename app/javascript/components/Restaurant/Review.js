import React from "react";
import Rating from "../Rating/Rating";

const Review = (props) => {
  const { description, title, score } = props.attributes;
  return (
    <div className="shadow-2xl rounded-2xl p-6 mb-6">
      <Rating score={score} />
      <div>{title}</div>
      <div>{description}</div>
    </div>
  );
};

export default Review;
