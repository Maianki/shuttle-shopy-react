export const snackbarInitialState = {
  snackbars: [],
};

export const snackbarReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_SNACKBAR":
      return { ...state, snackbars: [...state.snackbars, payload] };
    case "DELETE_SNACKBAR":
      return {
        ...state,
        snackbars: state.snackbars.filter(({ toastId }) => toastId !== payload),
      };
    default:
      throw new Error("unhandled action type");
  }
};
