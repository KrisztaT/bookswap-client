import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

const hostname = window.location.hostname;
const api = hostname === 'localhost' ? process.env.REACT_APP_DEV_BACKEND_URL : process.env.REACT_APP_PROD_BACKEND_URL;


export const useJoin = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const { dispatch } = useAuthContext();

  const join = async (username, firstName, email, password) => {
    setLoading(true);
    setError(null);

    // fetch join endpoint
    const response = await fetch(`${api}/api/user/join`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, first_name: firstName, email, password }),
    });
    const result = await response.json();
    console.log(result);

    if (!response.ok) {
      setLoading(false);
      setError(result.error);
      return false;
    }
    if (response.ok) {
      // save user to localstorage (username and token)
      localStorage.setItem("user", JSON.stringify(result));

      // update auth context
      dispatch({ type: "LOGIN", payload: result });

      // data loading is finished
      setLoading(false);
      return true;
    }
  };
  return { join, error, loading };
};