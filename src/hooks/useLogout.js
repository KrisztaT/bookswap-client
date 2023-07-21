import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    // delete user from storage
    localStorage.removeItem("user");

    // update global state
    dispatch({ type: "LOGOUT" });
  };

  return {logout};
};
