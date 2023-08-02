// custom hook for login
// this hook is responsible for making the API call to add login details to the database.
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { getApiBaseUrl } from "../utils/getApiUrl";

// get back the api url based on the hostname of the current URL.
const api = getApiBaseUrl();


export const useLogin = () => {
  // create error and loading state set to null
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  // get the dispatch function from the AuthContext
  const { dispatch } = useAuthContext();

  // login function responsible for managing the login for the app
  const login = async (username, password) => {
    // set loading state to true to indicate that the login process is in progress
    setLoading(true);
    // clear any previous errors
    setError(null);

    // send a POST request to the server's /api/user/login endpoint
    const response = await fetch(`${api}/api/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // include the request body as JSON with data: username, password
      body: JSON.stringify({ username, password }),
    });

    // parse the JSON response returned from the server
    const result = await response.json();

    // check if the response indicates an error (not OK)
    if (!response.ok) {
      // set loading state to false as the request is complete
      setLoading(false);
      // set the error state with the error message from the response
      setError(result.error);
      // return false to indicate that the join process failed
      return false;
    }

    // If the response is OK (no error)
    if (response.ok) {
      // save user to localstorage (username and token)
      localStorage.setItem("user", JSON.stringify(result));

      // update auth context with the new user data using the dispatch function
      dispatch({ type: "LOGIN", payload: result });

      // data loading is finished
      setLoading(false);
      // return true to indicate that the join process succeeded
      return true;
    }
  };
  return { login, error, loading };
};
