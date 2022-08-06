import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCategoryListener } from "../../CustomHooks/useCategoryListener";

const Category = ({ name, img, grid_name }) => {
  const { category, setCategory } = useCategoryListener();
  let style = {
    gridArea: `${grid_name}`,
    background: `url(${img}) no-repeat center/cover`,
  };

  return (
    <Link
      to="/menu"
      className="category"
      style={style}
      onClick={() => {
        setCategory(grid_name);
      }}
    >
      <h4>{name}</h4>
    </Link>
  );
};

export default Category;
