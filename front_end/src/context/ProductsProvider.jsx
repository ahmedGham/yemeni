import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import useHttpRequest from "../CustomHooks/useFetch/useHttpRequest";
import { translateProducts } from "../translations/translator";

export const productsContext = React.createContext();

const ProductsProvider = ({ children }) => {
  const [t, i18n] = useTranslation();
  const [products, setProducts] = useState([]);

  let {
    sendRequest: fetchProducts,
    isLoading: isLoadingProducts,
    error: ProductsError,
  } = useHttpRequest();

  const translatedProducts = useMemo(() => {
    return translateProducts(i18n.language, products);
  }, [i18n.language, products]);

  useEffect(() => {
    fetchProducts({ url: "http://127.0.0.1:8000/food/food/" }, setProducts);
  }, [fetchProducts]);

  return (
    <productsContext.Provider
      value={{
        products: translatedProducts,
        isLoadingProducts,
        ProductsError,
      }}
    >
      {children}
    </productsContext.Provider>
  );
};

export default ProductsProvider;
