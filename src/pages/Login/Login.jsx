import React from 'react'
import {Navbar, Footer } from "../../components"
import {Link} from "react-router-dom"
import "./login.css"

export function Login() {
  return (
    <div className='container'>
        <Navbar/>
        <main className="main flex-column">

            <div className="form-container card">
                <h2 className="form-heading">Login</h2>
                <form>
    
                    <div className="form-set">
                        <label className="form-label" for="email">Email:</label>
                        <input className="form-input form-input-lg pd-1" type="email" id="email" name="email" placeholder="test@gmail.com" required/>
                    </div>
    
                    <div className="form-set">
                        <label className="form-label" for="password">Password:</label>
                        <input className="form-input form-input-lg pd-1" type="password" id="password" name="password" placeholder="*********" required/>
                    </div>
                    
                    <div className="form-check md-vt-1 flex-row">
                        <input type="checkbox" value="demo" id="examplecheck"/>
                        <label className="form-label-inline text-sm text-primary" for="examplecheck"> Remember Me</label>  
                        <Link className="text-sm text-bold-500 forgot-password" to="forgot-pwd" role="button">Forgot Your password</Link> 
                    </div>
                    
                    <div className="flex-column ">
                        <input type="submit" className="btn btn-primary form-btn text-center" value="Sign In"/>
                        <button className="btn btn-secondary form-btn text-center">Guest login</button>
                        <p className="text-sm text-center text-bold-500 text-primary form-link-text">New to shuttle shopy ?</p>
                        <Link className="btn btn-secondary text-center" to="signup" role="button">Create Your Account</Link>
                    </div>
                </form>
            </div>
           
        </main>
        <Footer/>
    </div>
  )
}
