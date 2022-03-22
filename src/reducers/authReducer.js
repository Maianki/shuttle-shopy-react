export const authInitialState = {
  isLoggedIn: false,
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
        isLoggedIn: true,
      };

    case "loggedOut":
      return authInitialState;
    default:
      return state;
  }
};
