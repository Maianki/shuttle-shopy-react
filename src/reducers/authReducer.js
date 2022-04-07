export const authInitialState = {
  isLoggedIn: false,
  encodedToken: "",
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      const encodedToken = action.payload;

      return {
        ...state,
        isLoggedIn: true,
        encodedToken: encodedToken,
      };

    case "LOGGED_OUT":
      return authInitialState;

    default:
      throw Error("Unknown action.");
  }
};
