import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

const hostname = window.location.hostname;
const api = hostname === 'localhost' ? process.env.REACT_APP_DEV_BACKEND_URL : process.env.REACT_APP_PROD_BACKEND_URL;

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const { dispatch } = useAuthContext();

  const login = async (username, password) => {
    setLoading(true);
    setError(null);

    // fetch login endpoint
    const response = await fetch(`${api}/api/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const result = await response.json();
    console.log(result);

    if (!response.ok) {
      setLoading(false);
      setError(result.error);
    }
    if (response.ok) {
      // save user to localstorage (username and token)
      localStorage.setItem("user", JSON.stringify(result));

      // update auth context
      dispatch({ type: "LOGIN", payload: result });

      // data loading is finished
      setLoading(false);
    }
  };
  return { login, error, loading };
};
