import React from "react";
import { Navbar, Footer, Input, Label } from "../../components";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "../../hooks";
import "./sign-up-page.css";
import { BiEye, BiEyeSlash } from "../../assets/icons";

export function SignUpPage() {
  useDocumentTitle("Signup");
  return (
    <div classNameName='signup-container'>
      <Navbar />
      <main className='signup-main flex-column'>
        <div className='form-container card'>
          <h2 className='form-heading'>Sign Up</h2>
          <form>
            <div className='form-set'>
              <Label labelFor='fname' labelName='First Name' />
              <Input type='text' id='fname' name='fname' placeholder='Singh' />
            </div>

            <div className='form-set'>
              <Label labelFor='lname' labelName='Last Name' />
              <Input type='text' id='lname' name='lname' placeholder='Singh' />
            </div>

            <div className='form-set'>
              <Label labelFor='email' labelName='Email' />
              <Input
                type='email'
                id='email'
                name='email'
                placeholder='testSingh@gmail.com'
              />
            </div>

            <div className='form-set'>
              <Label labelFor='password' labelName='Password' />
              <Input
                type='password'
                id='password'
                name='password'
                placeholder='********'
              />
              <span className='toggle-password'>
                <BiEyeSlash />
              </span>
            </div>

            <div className='form-set'>
              <Label labelFor='confirm-password' labelName='Confirm Password' />
              <Input
                type='password'
                id='confirm-password'
                name='password'
                placeholder='Enter Pasword again'
              />
              <span className='toggle-password'>
                <BiEye></BiEye>
                <i className='fas fa-eye'></i>
              </span>
            </div>

            <div className='form-check md-vt-1 flex-row'>
              <input type='checkbox' value='demo' id='terms-and-conditions' />
              <label
                className='form-label-inline text-sm text-primary'
                htmlFor='terms-and-conditions'
              >
                I accept all terms and conditions.
              </label>
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
