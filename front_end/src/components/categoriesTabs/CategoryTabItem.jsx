import React from "react";
import { categoriesContext } from "../../context/CategoriesProvider";
import { categoriesActions } from "../../context/CategoriesProvider";
import { useContext } from "react";
const CategoryTabItem = ({ cat }) => {
  const { categoriesDispatch, chosenCategory } = useContext(categoriesContext);
  return (
    <p
      className={`menu-category ${
        cat.grid_name === chosenCategory && "active-category"
      }`}
      onClick={() =>
        categoriesDispatch({
          type: categoriesActions.SET_CHOSEN_CATEGORY,
          payload: cat.grid_name,
        })
      }
    >
      {cat.name}
    </p>
  );
};

export default CategoryTabItem;
