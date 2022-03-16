import './App.css';
import React from "react"
import { LandingPage, PageNotFound, ProductPage, Login } from "./pages";
import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/shop-now' element={<ProductPage />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/wishlist' element={<>Wishlist page</>}></Route>
        <Route path='/cart' element={<>Cart page</>}></Route>
        <Route path='/mockman' element={<Mockman />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
