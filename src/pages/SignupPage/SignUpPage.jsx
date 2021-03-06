import React, { useState } from "react";
import { Footer, Input, Label } from "../../components";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "../../hooks";
import "./sign-up-page.css";
import { BiEye, BiEyeSlash } from "../../assets/icons";
import { useAuth } from "../../context/auth-context";
import { useSnackbar } from "../../context";

export function SignUpPage() {
  useDocumentTitle("Signup");
  const { handleSignup } = useAuth();

  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { addSnackbar } = useSnackbar();

  const [showPassWord, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const submitHandler = (e) => {
    e.preventDefault();

    if (userDetails.password === userDetails.confirmPassword) {
      handleSignup(userDetails);

      setUserDetails({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      addSnackbar(
        "Password and confirm password doesn't match",
        "snackbar-danger"
      );
    }
  };

  return (
    <div className='signup-container'>
      <main className='signup-main flex-column'>
        <div className='form-container card'>
          <h2 className='form-heading'>Sign Up</h2>
          <form onSubmit={submitHandler}>
            <div className='form-set'>
              <Label labelFor='firstName' labelName='First Name' />
              <Input
                type='text'
                id='firstName'
                name='firstName'
                placeholder='John'
                value={userDetails.firstName}
                setUserDetails={setUserDetails}
                userDetails={userDetails}
              />
            </div>

            <div className='form-set'>
              <Label labelFor='lastName' labelName='Last Name' />
              <Input
                type='text'
                id='lastName'
                name='lastName'
                placeholder='Doe'
                value={userDetails.lastName}
                setUserDetails={setUserDetails}
                userDetails={userDetails}
              />
            </div>

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
                type={showPassWord.password ? `text` : `password`}
                id='password'
                name='password'
                placeholder='********'
                value={userDetails.password}
                setUserDetails={setUserDetails}
                userDetails={userDetails}
              />
              <span
                className='toggle-password'
                onClick={() =>
                  setShowPassword({
                    ...showPassWord,
                    password: !showPassWord.password,
                  })
                }
              >
                {showPassWord.password ? <BiEye /> : <BiEyeSlash />}
              </span>
            </div>

            <div className='form-set'>
              <Label labelFor='confirm-password' labelName='Confirm Password' />
              <Input
                type={showPassWord.confirmPassword ? `text` : `password`}
                id='confirm-password'
                name='confirmPassword'
                placeholder='Enter pasword again'
                value={userDetails.confirmPassword}
                setUserDetails={setUserDetails}
                userDetails={userDetails}
              />
              <span
                className='toggle-password'
                onClick={() =>
                  setShowPassword({
                    ...showPassWord,
                    confirmPassword: !showPassWord.confirmPassword,
                  })
                }
              >
                {showPassWord.confirmPassword ? <BiEye /> : <BiEyeSlash />}
                <i className='fas fa-eye'></i>
              </span>
            </div>

            <div className='flex-column'>
              <button type='submit' className='btn btn-primary form-btn'>
                Sign up
              </button>
              <p className='text-sm text-center text-bold-500 text-primary form-link-text'>
                Existing user ?
                <Link className='text-primary' to='/login'>
                  Login Here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
