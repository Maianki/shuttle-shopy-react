import React from "react";
import { Navbar, Footer } from "../../components";
import { useAuth } from "../../context/auth-context";
import { useDocumentTitle } from "../../hooks";
import { Link } from "react-router-dom";

export function Profile() {
  useDocumentTitle("Profile");
  const {
    auth: { user },
    authDispatcher,
  } = useAuth();
  return (
    <div className='cart-container'>
      <Navbar />
      <main className='cart-main'>
        <div className='card'>
          <p>Welcome, {user}</p>
          <p className='text-bold-500'>Start Shopping</p>
          <Link to='/shop-now'>
            <button className='btn btn-primary'>Shop Now</button>
          </Link>
          <Link to='/'>
            <button
              className='btn btn-secondary'
              onClick={() => authDispatcher({ type: "loggedOut" })}
            >
              Log out
            </button>
          </Link>
        </div>
        ;
      </main>
      <Footer />
    </div>
  );
}
