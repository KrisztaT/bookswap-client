import { useState } from "react";
import { useBookAndListingContext } from "./useBookAndListingContext";
import { useAuthContext } from "./useAuthContext";

// retrieve the hostname of the current URL.
const hostname = window.location.hostname;
// if the hostname is localhost the dev backend is used if not the prod backend is used
const api =
  hostname === "localhost"
    ? process.env.REACT_APP_DEV_BACKEND_URL
    : process.env.REACT_APP_PROD_BACKEND_URL;

// add book hook is for create book in case it doesn't exist in the database
export const useAddBookToListing = () => {
    // use both auth and book and listing context
  const { user } = useAuthContext();
  const { dispatch } = useBookAndListingContext();

  // create error and loading states, which will be used on the Add Book form
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const addBookToListing = async (imgUrl, title, author, page, releaseYear) => {
    setLoading(true);
    setError(null);

    // only logged in users can access this functionality
    if (!user) {
      setError("Please login.");
      return;
    }

      // fetch listing endpoint to add book
      const response = await fetch(`${api}/api/listing`, {
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
        dispatch({ type: "ADD_BOOK_TO_LISTING", payload: result });

        // data loading is finished
        setLoading(false);
      }
  
  };
  return { addBookToListing, error, loading };
};
