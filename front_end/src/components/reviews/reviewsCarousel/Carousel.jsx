import React, { useMemo, useReducer } from "react";
import Review from "../Review";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { root_reviews } from "../../../data";
import { translateReviews } from "../../../translations/translator";
import { carouselReducer, carousalActions } from "./carouselReducer";

const initailState = {
  current: 1,
  right: 0,
  left: 2,
};

const Carousel = () => {
  const [carouselState, dispatch] = useReducer(carouselReducer, initailState);
  const [t, i18n] = useTranslation();

  const reviews = useMemo(() => {
    return translateReviews(i18n.language, root_reviews);
  }, [i18n.language]);


  return (
    <div className="carousel">
      <BsFillArrowLeftCircleFill
        className="carousel-left-btn review-icon"
        onClick={() =>
          dispatch({ type: carousalActions.TURN_LEFT, max: reviews.length })
        }
      />
      <div className="carousel-senter">
        <div className="review-root">
          {reviews.map((review, index) => {
            let className = "disappear";

            if (index === carouselState.current) {
              className = "current";
            } else if (index === carouselState.right) {
              className = "right";
            } else if (index === carouselState.left) {
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
        onClick={() =>
          dispatch({ type: carousalActions.TURN_RIGHT, max: reviews.length })
        }
      />
    </div>
  );
};

export default Carousel;
