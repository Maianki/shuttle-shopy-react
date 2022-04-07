import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import { authReducer, authInitialState } from "../reducers";
import { LOGIN_API, SIGNUP_API } from "../constants/apiEndPoints";
import { useSnackbar } from ".";

const authContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [auth, authDispatcher] = useReducer(authReducer, authInitialState);

  const { addSnackbar } = useSnackbar();

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
          payload: encodedToken,
        });
        addSnackbar("User created you are now logged in", "snackbar-primary");
      }
    } catch (error) {
      const { status } = error.response;
      if (status === 422) {
        addSnackbar("Email already exsist", "snackbar-danger");
      } else {
        addSnackbar(`${error.message}`, "snackbar-danger");
      }
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
          payload: encodedToken,
        });

        addSnackbar("You are logged in", "snackbar-primary");
      }
    } catch (error) {
      const { status } = error.response;
      if (status === 404) {
        addSnackbar("This email is not registered", "snackbar-danger");
      } else if (status === 401) {
        addSnackbar(
          "You entered incorrect email or password",
          "snackbar-danger"
        );
      } else {
        addSnackbar(`${error.message}`, "snackbar-danger");
      }
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
