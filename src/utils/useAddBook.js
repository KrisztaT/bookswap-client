import { useState } from "react";
import { useBookAndListingContext } from "./useBookAndListingContext";
import { useAuthContext } from "../utils/useAuthContext";

const hostname = window.location.hostname;
const api =
  hostname === "localhost"
    ? process.env.REACT_APP_DEV_BACKEND_URL
    : process.env.REACT_APP_PROD_BACKEND_URL;

export const useAddBook = () => {
  const { user } = useAuthContext();
  const { dispatch } = useBookAndListingContext();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const addBook = async (imgUrl, title, author, page, releaseYear) => {
    setLoading(true);
    setError(null);

    if (!user) {
      setError("Please login.");
      return;
    }

    // fetch book endpoint to add book
    const response = await fetch(`${api}/api/book`, {
      method: "POST",
      body: JSON.stringify({ imgUrl, title, author, page, releaseYear }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const result = await response.json();
    console.log(result);

    if (!response.ok) {
      setLoading(false);
      setError(result.error);
    }
    if (response.ok) {
      // update context
      dispatch({ type: "ADD_BOOK", payload: result });

      // data loading is finished
      setLoading(false);
    }
  };
  return { addBook, error, loading };
};
