import React, { useState } from "react";
import { Footer, Input, Label } from "../../components";
import { BiEye, BiEyeSlash } from "../../assets/icons";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "../../hooks";
import { useAuth } from "../../context/auth-context";
import "./login.css";

export function Login() {
  const { handleSignIn } = useAuth();

  useDocumentTitle("Login");
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const [showPassWord, setShowPassword] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    handleSignIn(userDetails);
  };

  const guestLoginHandler = (e) => {
    e.preventDefault();
    handleSignIn({ email: "johndoe@gmail.com", password: "johnDoe123" });
  };

  return (
    <div className='login-container'>
      {/* <Navbar /> */}
      <main className='login-main flex-column'>
        <div className='form-container card'>
          <h2 className='form-heading'>Login</h2>
          <form onSubmit={submitHandler}>
            <div className='form-set'>
              <Label labelFor='email' labelName='Email' />
              <Input
                type='email'
                id='email'
                name='email'
                placeholder='johndoe@gmail.com'
                value={userDetails.email}
                setUserDetails={setUserDetails}
                userDetails={userDetails}
              />
            </div>

            <div className='form-set'>
              <Label labelFor='password' labelName='Password' />
              <Input
                type={showPassWord ? `text` : `password`}
                id='password'
                name='password'
                placeholder='********'
                value={userDetails.password}
                setUserDetails={setUserDetails}
                userDetails={userDetails}
              />
              <span
                className='toggle-password'
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassWord ? <BiEye /> : <BiEyeSlash />}
              </span>
            </div>

            <div className='flex-column '>
              <input
                type='submit'
                className='btn btn-primary form-btn text-center'
                value='Sign in'
              />
              <button
                onClick={guestLoginHandler}
                className='btn btn-secondary form-btn text-center'
              >
                Guest login
              </button>
              <p className='text-sm text-center text-bold-500 text-primary form-link-text'>
                New to shuttle shopy ?
              </p>
              <Link
                className='btn btn-secondary text-center btn-create-acc'
                to='/signup'
                role='button'
              >
                Create your account
              </Link>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
