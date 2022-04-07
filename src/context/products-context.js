import { createContext, useContext, useEffect, useReducer } from "react";
import { productsReducer, productsAndFilterInitialState } from "../reducers";
import { useAxios } from "../hooks";
import { PRODUCTS_API } from "../constants/apiEndPoints";
export const productsContext = createContext({});

const ProductsProvider = ({ children }) => {
  const { response } = useAxios(PRODUCTS_API);

  const [products, productsDispatcher] = useReducer(
    productsReducer,
    productsAndFilterInitialState
  );

  useEffect(() => {
    productsDispatcher({ type: "INITIALISE_PRODUCTLIST", payload: response });
  }, [response]);

  return (
    <productsContext.Provider
      value={{ products, productsDispatcher, productsAndFilterInitialState }}
    >
      {children}
    </productsContext.Provider>
  );
};

const useProducts = () => useContext(productsContext);

export { useProducts, ProductsProvider };
