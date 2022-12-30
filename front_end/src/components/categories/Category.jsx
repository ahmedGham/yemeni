import { useContext } from "react";
import { Link } from "react-router-dom";
import { useCategoryListener } from "../../CustomHooks/useCategoryListener";
import { categoriesContext } from "../../context/CategoriesProvider";
import {categoriesActions} from '../../context/CategoriesProvider'

const Category = ({ name, img, grid_name }) => {
  const { categoriesDispatch } = useContext(categoriesContext);

  //TODO fix categories
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
        categoriesDispatch({ type: categoriesActions.SET_CHOSEN_CATEGORY,payload:grid_name });
      }}
    >
      <h4>{name}</h4>
    </Link>
  );
};

export default Category;
