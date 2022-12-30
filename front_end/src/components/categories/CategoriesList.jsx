import React, { useContext } from "react";
import Category from "./Category";
import { categoriesContext } from "../../context/CategoriesProvider";

const CategoriesList = () => {
  const { categories } = useContext(categoriesContext);
  return (
    <div className="category-list">
      {categories.map((category) => {
        return (
          category.grid_name !== "all" && (
            <Category
              key={category.id}
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
