import React, { useContext, useState } from "react";

const categoryContext = React.createContext();


const CategoryListenerProvider = ({ children }) => {
  const [chosenCategory, setChosenCategory] = useState("all");
  return (
    <categoryContext.Provider value={{ chosenCategory, setChosenCategory }}>
      {children}
    </categoryContext.Provider>
  );
};

export const useCategoryListener = () => {
  return useContext(categoryContext);
};

export default CategoryListenerProvider;
