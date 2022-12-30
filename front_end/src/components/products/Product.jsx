import React from "react";
import Button from "../UI/Button";
import { Navigate} from "react-router-dom";
import { useTranslation } from "react-i18next";

const Product = ({ name, img, description, price, onClickDetails }) => {
  const [t, i18n] = useTranslation();
  return (
    <div className="product">
      <div className="card-header">
        <img src={process.env.PUBLIC_URL + img} alt={name} />
        <h5>{name}</h5>
      </div>
      <div className="card-body">
        <p>{description}</p>
      </div>
      <div className="card-footer">
        <p>{price}</p>
        <Button onClick={onClickDetails}>{t("product.details")}</Button>
      </div>
    </div>
  );
};

export default Product;
