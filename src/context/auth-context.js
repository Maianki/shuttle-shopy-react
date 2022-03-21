import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducers";

const authContext = createContext(null);

const authInitialState = {
  isLoggedIn: false,
  isTestLoggedIn: false,
  userName: "",
  userId: "",
  cart: [],
  wishlist: [],
};

const AuthProvider = ({ children }) => {
  const handleSignup = async (userInfo) => {
    const { firstName, lastName, email, password, confirmPassword } = userInfo;
    try {
      const response = await axios.post("/api/auth/signup", {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      });
      // saving the encodedToken in the localStorage
      localStorage.setItem("token", response.data.encodedToken);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignIn = async (userInfo) => {
    const { email, password } = userInfo;
    try {
      const response = await axios.post("/api/auth/login", {
        email,
        password,
      });
      // saving the encodedToken in the localStorage
      localStorage.setItem("token", response.data.encodedToken);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [auth, authDispatcher] = useReducer(authReducer, authInitialState);
  return (
    <authContext.Provider
      value={{ auth, authDispatcher, handleSignup, handleSignIn }}
    >
      {children}
    </authContext.Provider>
  );
};

const useAuth = () => useContext(authContext);

export { useAuth, AuthProvider };
