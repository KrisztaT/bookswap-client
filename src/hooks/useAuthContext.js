import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

// custom hook to access the AuthContext
export const useAuthContext = () => {
  // get the AuthContext data from the AuthContextProvider
  const context = useContext(AuthContext);

  // check if the AuthContext is available
  if (!context) {
    // if the context is not available, throw an error
    throw Error("useAuthContext must be used inside an AuthContextProvider");
  }

  // if the context is available, return the AuthContext data
  return context;
};
