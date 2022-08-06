import React from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const Review = ({ text, className }) => {
  return (
    <div className={`review ${className || ""}`}>
      <ImQuotesLeft className="review-icon" style={{ alignSelf: "start" }} />
      <p>{text}</p>
      <ImQuotesRight className="review-icon" style={{ alignSelf: "end" }} />
    </div>
  );
};

export default Review;
