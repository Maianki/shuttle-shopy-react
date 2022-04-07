import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import { authReducer, authInitialState } from "../reducers";
import { LOGIN_API, SIGNUP_API } from "../constants/apiEndPoints";

const authContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [auth, authDispatcher] = useReducer(authReducer, authInitialState);

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

      const { encodedToken } = response.data;

      if (response.status === 201) {
        // saving the encodedToken in the localStorage
        localStorage.setItem("token", JSON.stringify(encodedToken));

        authDispatcher({
          type: "LOGGED_IN",
          payload:encodedToken,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const encodedToken = JSON.parse(localStorage.getItem("token"));

    authDispatcher({
      type: "LOGGED_IN",
      payload: encodedToken,
    });
  }, []);

  const handleSignIn = async (userInfo) => {
    const { email, password } = userInfo;
    try {
      const response = await axios.post(LOGIN_API, {
        email,
        password,
      });
      const { encodedToken } = response.data;

      if (response.status === 200) {
        // saving the encodedToken in the localStorage
        localStorage.setItem("token", JSON.stringify(encodedToken));

        authDispatcher({
          type: "LOGGED_IN",
          payload:  encodedToken ,
        });
      }
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
};;

const useAuth = () => useContext(authContext);

export { useAuth, AuthProvider };
