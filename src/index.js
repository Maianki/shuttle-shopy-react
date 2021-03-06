import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { makeServer } from "./server";
import {BrowserRouter} from "react-router-dom";
import {
  AddressProvider,
  AuthProvider,
  CartWishlistProvider,
  ProductsProvider,
  SnackbarProvider,
} from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SnackbarProvider>
        <AuthProvider>
          <ProductsProvider>
            <CartWishlistProvider>
              <AddressProvider>
                <App />
              </AddressProvider>
            </CartWishlistProvider>
          </ProductsProvider>
        </AuthProvider>
      </SnackbarProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
