import React from "react";
import Category from "./Category";
import { root_categories } from "../../data";
import { useTranslation } from "react-i18next";
import { translateCategories } from "../../translations/translator";

const CategoriesList = () => {
  const [t, i18n] = useTranslation();
  const categories = translateCategories(i18n,root_categories);
  return (
    <div className="category-list">
      {categories.map((category, index) => {
        return (
          category.grid_name !== "all" && (
            <Category
              key={index}
              name={category.name}
              img={category.img}
              grid_name={category.grid_name}
            />
          )
        );
      })}
    </div>
  );
};

export default CategoriesList;
