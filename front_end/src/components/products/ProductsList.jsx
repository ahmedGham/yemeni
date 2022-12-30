import React from "react";
import Product from "./Product";
import { useContext } from "react";
import { categoriesContext } from "../../context/CategoriesProvider";

const ProductsList = ({ categories, products, setDishDetails }) => {
  const { chosenCategory } = useContext(categoriesContext);

  const handleDetails = (name, price, image, description) => {
    setDishDetails({ name, image, description, price });
  };

  console.log(products)

  return (
    <div>
      <div className="flexbox-3 dishs-list">
        {products.map(
          ({
            id,
            name,
            image,
            description,
            price,
            category: productCategories,
          }) => {
            let showProduct = chosenCategory === "all";

            if (!showProduct) {
              productCategories.forEach((cat) => {
                showProduct ||= cat.grid_name === chosenCategory;
              });
            }

            return showProduct ? (
              <Product
                key={id}
                name={name}
                price={`₽ ${price}`}
                img={image}
                description={
                  description.length <= 20
                    ? description
                    : `${description.substring(0, 20)} ...`
                }
                onClickDetails={() =>
                  handleDetails(name, price, image, description)
                }
              />
            ) : (
              <></>
            );
          }
        )}
      </div>
    </div>
  );
};

export default ProductsList;
