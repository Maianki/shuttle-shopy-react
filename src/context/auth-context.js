import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { authReducer, authInitialState } from "../reducers";

const authContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [auth, authDispatcher] = useReducer(authReducer, authInitialState);

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
      console.log(response.data.createdUser._id);
      const {
        createdUser: { _id: userID },
      } = response.data;

      localStorage.setItem("token", response.data.encodedToken);
      authDispatcher({ type: "loggedIn", payload: userID });
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
      const { foundUser } = response.data;
      console.log("from Login--->", response.data.foundUser);
      authDispatcher({ type: "loggedIn", payload: foundUser });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

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
