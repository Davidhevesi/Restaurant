import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Header from "./Header";
import Review from "./Review";
import ReviewForm from "./ReviewForm";

const Restaurant = (props) => {
  const [restaurant, setRestaurant] = useState({});
  const [review, setReview] = useState({});
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const slug = props.match.params.slug;
    const url = `/api/restaurants/${slug}`;
    axios
      .get(url)
      .then((resp) => {
        setRestaurant(resp.data);
        setLoaded(true);
      })
      .catch((resp) => console.log(resp));
  }, []);
  const handleChange = (e) => {
    e.preventDefault();

    setReview(Object.assign({}, review, { [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    //preventRedirect
    e.preventDefault();

    const csrfToken = document.querySelector("[name=csrf-token]").content;

    axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

    const restaurant_id = restaurant.data.id;
    axios
      .post("/api/reviews", { ...review, restaurant_id })
      .then((resp) => {
        const included = [...restaurant.included, resp.data];
        setRestaurant({ ...restaurant, included });
        setReview({ title: "", description: "", score: 0 });
      })
      .catch((resp) => {});
  };
  const setRating = (score, e) => {
    e.preventDefault();

    setReview({ ...review, score });
  };
  let reviews;
  if (loaded && restaurant.included) {
    reviews = restaurant.included.map((item, index) => {
      return <Review key={index} attributes={item.attributes} />;
    });
  }
  return (
    <div className="grid grid-cols-2 gap-4 bg-gray-200">
      {loaded && (
        <Fragment>
          <div>
            <div className="ml-12">
              <Header
                attributes={restaurant.data.attributes}
                reviews={restaurant.included}
              />

              {reviews}
            </div>
          </div>
          <div>
            <ReviewForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              attributes={restaurant.data.attributes}
              setRating={setRating}
              review={review}
            />
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Restaurant;
