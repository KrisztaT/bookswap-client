import { useState } from "react";
import { useBookAndListingContext } from "./useBookAndListingContext";
import { useAuthContext } from "../utils/useAuthContext";
import { useSearchBook } from "./useSearchBook";

// retrieve the hostname of the current URL.
const hostname = window.location.hostname;
// if the hostname is localhost the dev backend is used if not the prod backend is used
const api =
  hostname === "localhost"
    ? process.env.REACT_APP_DEV_BACKEND_URL
    : process.env.REACT_APP_PROD_BACKEND_URL;

// add book hook is for create book in case it doesn't exist in the database
export const useAddBook = () => {
    // use both auth and book and listing context
  const { user } = useAuthContext();
  const { dispatch } = useBookAndListingContext();
  const { searchBook } = useSearchBook();

  // create error and loading states, which will be used on the Add Book form
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const addBook = async (imgUrl, title, author, page, releaseYear) => {
    setLoading(true);
    setError(null);

    // only logged in users can access this functionality
    if (!user) {
      setError("Please login.");
      return;
    }

    // call the searchBook function and passing in the title,author, setError, and setLoading as
    // arguments. It is then assigning the result of the function call to the variable res.
    const res = await searchBook(title, author, setError, setLoading);
    if (!res.exists) {
      // fetch book endpoint to add book
      const response = await fetch(`${api}/api/book`, {
        method: "POST",
        body: JSON.stringify({ imgUrl, title, author, page, releaseYear }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      //parse the response from the API request into JSON format.
      const result = await response.json();
      console.log(result);

      // check if the response from the API request is not successful
      // set loading to false and set error to error message
      if (!response.ok) {
        setLoading(false);
        setError(result.error);
      }
      // if response is ok
      if (response.ok) {
        // update context
        dispatch({ type: "ADD_BOOK", payload: result });

        // data loading is finished
        setLoading(false);
      }
    } else {
      // if the book already exists, then the loading is finished, hence it set to false
      setLoading(false);
    }
  };
  return { addBook, error, loading };
};
