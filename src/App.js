import './App.css';
import React, { useState } from "react";
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
import {
  AuthenticatedRoute,
  NotAuthenticatedRoute,
  Drawer,
  Navbar,
} from "./components";
import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <div className='App'>
      {isDrawerOpen && (
        <Drawer toggleDrawer={toggleDrawer} isDrawerOpen={isDrawerOpen} />
      )}
      <Navbar toggleDrawer={toggleDrawer} />
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/shop-now' element={<ProductPage />}></Route>
        <Route element={<NotAuthenticatedRoute />}>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<SignUpPage />}></Route>
        </Route>

        <Route element={<AuthenticatedRoute />}>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/wishlist' element={<Wishlist />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
        </Route>
        <Route path='/mockman' element={<Mockman />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
