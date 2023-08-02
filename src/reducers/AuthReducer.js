export const authReducer = (state, action) => {
  switch (action.type) {
    // set the user data when the user logs in
    case "LOGIN":
      return { user: action.payload };
    // clear the user data when the user logs out
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};
