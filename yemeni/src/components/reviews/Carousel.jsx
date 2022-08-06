import React, { useState } from "react";
import Review from "./Review";
import Card from "../UI/Card";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { root_reviews } from "../../data";
import { translateReviews } from "../../translations/translator";

const Carousel = () => {
  const [current, setCurrent] = useState(1);
  const [right, setRight] = useState(0);
  const [left, setleft] = useState(2);
  const [t, i18n] = useTranslation();
  const reviews = translateReviews(i18n, root_reviews);

  const rightf = (num) => {
    return num >= 0 ? num : reviews.length + num;
  };

  const leftf = (num) => {
    return num < reviews.length ? num : num - reviews.length;
  };

  const handleClickLeft = (index) => {
    setCurrent(leftf(index + 1));
    setleft(leftf(index + 2));
    setRight(index);
  };

  const handleClickRight = (index) => {
    setCurrent(rightf(index - 1));
    setRight(rightf(index - 2));
    setleft(index);
  };

  return (
    <div className="carousel">
      {/* <div> */}
      <BsFillArrowLeftCircleFill
        className="carousel-left-btn review-icon"
        onClick={() => handleClickLeft(current)}
      />
      {/* </div> */}
      <div className="carousel-senter">
        <div className="review-root">
          {reviews.map((review, index) => {
            let className = "disappear";

            if (index === current) {
              className = "current";
            } else if (index === right) {
              className = "right";
            } else if (index === left) {
              className = "left";
            }

            return (
              <Review
                key={index}
                text={review.text}
                className={className}
                index={index}
              />
            );
          })}
        </div>
      </div>
      <BsFillArrowRightCircleFill
        className="carousel-right-btn review-icon"
        onClick={() => handleClickRight(current)}
      />
    </div>
  );
};

export default Carousel;
