export const authInitialState = {
  isLoggedIn: false,
  isTestLoggedIn: false,
  user: "",
  userId: "",
  cart: [],
  wishlist: [],
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "loggedIn":
      const { firstName, lastName, _id: userId } = action.payload;
      return {
        ...state,
        userId: userId,
        user: `${firstName} ${lastName}`,
        isLoggedIn: !state.isLoggedIn,
      };

    case "loggedOut":
      return authInitialState;
    default:
      return state;
  }
};
