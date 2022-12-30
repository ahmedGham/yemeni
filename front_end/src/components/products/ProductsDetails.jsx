import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../UI/Button";

const ProductsDetails = ({ dishDetails, handleBreif }) => {
  const [t] = useTranslation();
  return (
    <div
      className={`layer ${dishDetails !== null ? "active-layer" : ""}`}
      onClick={(e) => {
        handleBreif(e);
      }}
    >
      <div className="product-details-container">
        <div className="product-details">
          <div className="details-head">
            <img
              src={`${dishDetails?.image}`}
              alt=""
              className="img product-detials-img"
            />
          </div>
          <div className="details-body">
            <div>
              <h3>{`${dishDetails?.name}`}</h3>
              <p>{`${t("description")}: ${dishDetails?.description}`}</p>
              <p>{`${t("price")}: ${dishDetails?.price}`}</p>
            </div>
            <div className="details-foot">
              <Button>{t("briefly")}</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
