import './App.css';
import React from "react"
import {
  LandingPage,
  PageNotFound,
  ProductPage,
  Login,
  SignUpPage,
  Wishlist,
  Cart,
  Profile,
} from "./pages";
import { AuthenticatedRoute, NotAuthenticatedRoute } from "./components";
import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/shop-now' element={<ProductPage />}></Route>
        <Route element={<NotAuthenticatedRoute />}>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<SignUpPage />}></Route>
        </Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route element={<AuthenticatedRoute />}>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/wishlist' element={<Wishlist />}></Route>
        </Route>
        <Route path='/mockman' element={<Mockman />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
