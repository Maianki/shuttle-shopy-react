export const authInitialState = {
  isLoggedIn: false,
  user: "",
  userId: "",
  encodedToken: "",
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      const {
        user: { firstName, lastName, _id: userId = "" },
        encodedToken,
      } = action.payload;

      return {
        ...state,
        userId: userId,
        user: `${firstName} ${lastName}`,
        isLoggedIn: true,
        encodedToken: encodedToken,
      };

    case "LOGGED_OUT":
      return authInitialState;
    default:
      return state;
  }
};
