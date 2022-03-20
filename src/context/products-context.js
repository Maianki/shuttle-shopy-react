import { createContext, useContext, useEffect, useReducer } from "react";
import { productsReducer } from "../reducers";
import { useAxios } from "../hooks";
import { PRODUCTS_API } from "../constants/apiEndPoints";

const productsContext = createContext({});

const ProductsProvider = ({ children }) => {
  const { response } = useAxios(PRODUCTS_API);
  const initialState = {
    productsList: [],
    sortByPrice: "none",
    filterByCategory: [],
    filterByRating: [],
    filterByPriceRange: 0,
    isOutOFStock: true,
  };

  const [products, productsDispatcher] = useReducer(
    productsReducer,
    initialState
  );

  useEffect(() => {
    productsDispatcher({ type: "initialize", payload: response });
  }, [response]);

  return (
    <productsContext.Provider value={{ products, productsDispatcher }}>
      {children}
    </productsContext.Provider>
  );
};

const useProducts = () => useContext(productsContext);

export { useProducts, ProductsProvider };
