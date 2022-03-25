import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { authReducer, authInitialState } from "../reducers";
import { LOGIN_API, SIGNUP_API } from "../constants/apiEndPoints";

const authContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [auth, authDispatcher] = useReducer(authReducer, authInitialState);

  useEffect(() => {
    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");
    const encodedToken = localStorage.getItem("token");

    authDispatcher({
      type: "loggedIn",
      payload: { user: { firstName, lastName }, encodedToken },
    });
  }, [authDispatcher]);

  const handleSignup = async (userInfo) => {
    const { firstName, lastName, email, password, confirmPassword } = userInfo;
    try {
      const response = await axios.post(SIGNUP_API, {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      });

      const { createdUser: user, encodedToken } = response.data;

      // saving the encodedToken in the localStorage
      localStorage.setItem("token", encodedToken);
      localStorage.setItem("firstName", user.firstName);
      localStorage.setItem("lastName", user.lastName);

      authDispatcher({
        type: "loggedIn",
        payload: { user, encodedToken },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignIn = async (userInfo) => {
    const { email, password } = userInfo;
    try {
      const response = await axios.post(LOGIN_API, {
        email,
        password,
      });
      const { foundUser: user, encodedToken } = response.data;

      // saving the encodedToken in the localStorage
      localStorage.setItem("token", encodedToken);

      authDispatcher({
        type: "loggedIn",
        payload: { user, encodedToken },
      });
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
