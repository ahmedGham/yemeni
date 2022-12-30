import React, { useState } from "react";
import Section from "../components/UI/Section";
import ScrollToTop from "react-scroll-up";
import { useTranslation } from "react-i18next";
import CategoriesTabList from "../components/categoriesTabs/CategoriesTabList";
import ProductsList from "../components/products/ProductsList";
import ProductsDetails from "../components/products/ProductsDetails";
import { useContext } from "react";
import { productsContext } from "../context/ProductsProvider";
import { categoriesContext } from "../context/CategoriesProvider";

const Menu = () => {
  const [t, i18n] = useTranslation();
  const [dishDetails, setDishDetails] = useState(null);
  let loading = true;
  let error = false;

  const { categories, isLoadingCategories, ErrorCategories } =
    useContext(categoriesContext);

  const { products, isLoadingProducts, ProductsError } =
    useContext(productsContext);

  loading = isLoadingProducts || isLoadingCategories;
  error = ErrorCategories || ProductsError;

  const handleBreif = (e) => {
    setDishDetails(null);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="loading-container">
        <div className="error">error</div>
      </div>
    );
  }

  return (
    <>
      <div className="scroll-btn">
        <ScrollToTop showUnder={300}>
          <span className="btn">UP</span>
        </ScrollToTop>
      </div>
      <ProductsDetails dishDetails={dishDetails} handleBreif={handleBreif} />
      <Section title={t("menu.title")} description={t("menu.desc")}>
        <div className="menu">
          <CategoriesTabList categories={categories} />
          <ProductsList
            categories={categories}
            products={products}
            setDishDetails={setDishDetails}
          />
        </div>
      </Section>
    </>
  );
};

export default Menu;
