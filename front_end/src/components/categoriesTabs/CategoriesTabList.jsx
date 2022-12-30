import React from "react";
import CategoryTabItem from "./CategoryTabItem";

const CategoriesTabList = ({ categories }) => {
  
  return (
    <div className="menu-categories">
      {categories.map((cat) => {
        return <CategoryTabItem key={cat.id} cat={cat} />;
      })}
    </div>
  );
};

export default CategoriesTabList;
