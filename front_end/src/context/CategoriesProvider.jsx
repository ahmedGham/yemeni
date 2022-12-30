import React, { useMemo } from "react";
import { translateCategories } from "../translations/translator";
import { useReducer } from "react";
import useHttpRequest from "../CustomHooks/useFetch/useHttpRequest";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const categoriesContext = React.createContext();

const initialState = {
  chosenCategory: 'all',
  categories: [],
};

export const categoriesActions = {
  SET_CATEGORIES: "SET_CATEGORIES",
  SET_CHOSEN_CATEGORY: "SET_CHOSEN_CATEGORY",
};

const reducer = (state, action) => {
  switch (action.type) {
    case categoriesActions.SET_CATEGORIES:
      console.log(action);
      return {
        ...state,
        categories: action.payload,
      };
    case categoriesActions.SET_CHOSEN_CATEGORY:
      return {
        ...state,
        chosenCategory: action.payload,
      };
    default:
      return state;
  }
};

const CategoriesProvider = ({ children }) => {
  const [categoriesState, dispatch] = useReducer(reducer, initialState);
  const [t, i18n] = useTranslation();

  let {
    sendRequest: fetchCategories,
    isLoading: isLoadingCategories,
    error: ErrorCategories,
  } = useHttpRequest();

  useEffect(() => {
    const handleData = (categories) => {
      dispatch({ type: categoriesActions.SET_CATEGORIES, payload: categories });
    };
    fetchCategories(
      { url: "http://127.0.0.1:8000/food/categories/" },
      handleData
    );
  }, [fetchCategories]);

  const translatedCategories = useMemo(
    () => translateCategories(i18n.language, categoriesState.categories),
    [i18n.language, categoriesState.categories]
  );

  return (
    <categoriesContext.Provider
      value={{
        categories: translatedCategories,
        chosenCategory: categoriesState.chosenCategory,
        categoriesDispatch: dispatch,
        ErrorCategories,
        isLoadingCategories,
      }}
    >
      {children}
    </categoriesContext.Provider>
  );
};

export default CategoriesProvider;
