import React, { useContext, useState } from "react";

const categoryContext = React.createContext();

const CategoryListenerProvider = ({ children }) => {
  const [category, setCategory] = useState("all");
  return (
    <categoryContext.Provider value={{ category, setCategory }}>
      {children}
    </categoryContext.Provider>
  );
};

export const useCategoryListener = () => {
  return useContext(categoryContext);
};

export default CategoryListenerProvider;
