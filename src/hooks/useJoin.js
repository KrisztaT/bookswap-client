// custom hook for join
// this hook is responsible for making the API call to add join details to the database.
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { getApiBaseUrl } from "../utils/getApiUrl";

// get back the api url based on the hostname of the current URL.
const api = getApiBaseUrl();

export const useJoin = () => {
  // create error and loading state set to null
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  // get the dispatch function from the AuthContext
  const { dispatch } = useAuthContext();

  // join function responsible for managing the join for the app
  const join = async (username, firstName, email, password) => {
    // set loading state to true to indicate that the join process is in progress
    setLoading(true);
    // clear any previous errors
    setError(null);

    // send a POST request to the server's /api/user/join endpoint to create a new user account
    const response = await fetch(`${api}/api/user/join`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // include the request body as JSON with data: username, first_name, email, password
      body: JSON.stringify({
        username,
        first_name: firstName,
        email,
        password,
      }),
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
  return { join, error, loading };
};
