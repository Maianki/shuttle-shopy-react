import React from 'react'
import { Navbar, Footer, Input, Label } from "../../components";
import { BiEye, BiEyeSlash } from "../../assets/icons";
import { Link } from "react-router-dom";
import "./login.css";

export function Login() {
  return (
    <div className='login-container'>
      <Navbar />
      <main className='login-main flex-column'>
        <div className='form-container card'>
          <h2 className='form-heading'>Login</h2>
          <form>
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
                {<BiEyeSlash /> && <BiEye />}
              </span>
            </div>

            <div className='form-check md-vt-1 flex-row'>
              <input type='checkbox' value='demo' id='examplecheck' />
              <label
                className='form-label-inline text-sm text-primary'
                for='examplecheck'
              >
                Remember Me
              </label>
              <Link
                className='text-sm text-bold-500 forgot-password'
                to='forgot-pwd'
                role='button'
              >
                Forgot Your password
              </Link>
            </div>

            <div className='flex-column '>
              <input
                type='submit'
                className='btn btn-primary form-btn text-center'
                value='Sign In'
              />
              <button className='btn btn-secondary form-btn text-center'>
                Guest login
              </button>
              <p className='text-sm text-center text-bold-500 text-primary form-link-text'>
                New to shuttle shopy ?
              </p>
              <Link
                className='btn btn-secondary text-center'
                to='/signup'
                role='button'
              >
                Create Your Account
              </Link>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
