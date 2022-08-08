import React, { useEffect, useState } from "react";
import Section from "../components/UI/Section";
import { useCategoryListener } from "../CustomHooks/useCategoryListener";
import Product from "../components/products/Product";
import ScrollToTop from "react-scroll-up";
import { useTranslation } from "react-i18next";
import { translateCategory, translateDish } from "../translations/translator";
import useFetch from "../CustomHooks/useFetch";
import Button from "../components/UI/Button";

const Menu = () => {
  const { category, setCategory } = useCategoryListener();
  const [loading, setLoading] = useState(true);
  const [t, i18n] = useTranslation();
  const [dishDetails, setDishDetails] = useState();
  const {
    data: categories,
    isLoading: isLoadingCategories,
    isError: isCategoriesError,
  } = useFetch("http://localhost:8000/food/categories/");
  const {
    data: dishs,
    isLoading: isLoadingDishs,
    isError: isdishsError,
  } = useFetch("http://localhost:8000/food/food/");

  useEffect(() => {
    if (!(isLoadingDishs && isLoadingCategories)) {
      setLoading(false);
    }
  }, [isLoadingDishs, isLoadingCategories]);

  const handleBreif = (e) => {
    if (
      e.target.classList.contains("btn") ||
      e.target.classList.contains("product-details-container")
    ) {
      document.querySelector(".layer").classList.remove("active-layer");
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading"></div>
      </div>
    );
  }
  return (
    <div>
      <div className="scroll-btn">
        <ScrollToTop showUnder={300}>
          <span className="btn">UP</span>
        </ScrollToTop>
      </div>
      <div
        className="layer"
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
      <Section title={t("menu.title")} description={t("menu.desc")}>
        <div className="menu">
          <div className="menu-categories">
            {categories.map((cat) => {
              let { name, translatedName } = translateCategory(i18n, cat);
              return (
                <p
                  className={`menu-category ${
                    name === category && "active-category"
                  }`}
                  onClick={() => setCategory(name)}
                >
                  {translatedName}
                </p>
              );
            })}
          </div>
          <div className="flexbox-3 dishs-list">
            {dishs.map((dish) => {
              let { name, image, description, price } = translateDish(
                i18n,
                dish
              );
              let dishCategory = categories.find((cat) => {
                return cat.id === dish.category[0];
              });

              const handleDetails = () => {
                setDishDetails({ name, image, description, price });
                document.querySelector(".layer").classList.add("active-layer");
              };

              return (
                (dishCategory.name === category || category === "all") && (
                  <Product
                    name={name}
                    price={`₽ ${price}`}
                    img={image}
                    description={
                      description.length <= 20
                        ? description
                        : `${description.substring(0, 20)} ...`
                    }
                    onClickDetails={() => handleDetails()}
                  />
                )
              );
            })}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Menu;
