// custom hook for logout
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  // get the dispatch function from the AuthContext
  const { dispatch } = useAuthContext();

  const logout = () => {
    // delete user from storage
    localStorage.removeItem("user");

    // update global state
    dispatch({ type: "LOGOUT" });
  };

  return { logout };
};
