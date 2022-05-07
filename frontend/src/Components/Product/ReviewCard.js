import { Rating } from "@material-ui/lab";
import React from "react";
import profilePng from "../../Images/Profile.png";

const ReviewCard = ({ review }) => {
  const options = {
    value: review.Rating,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <div className="reviewCard">
      <img src={profilePng} alt="User" />
      <p>{review.Name}</p>
      <Rating {...options} />
      <span className="reviewCardComment">{review.Comment}</span>
    </div>
  );
};

export default ReviewCard;
