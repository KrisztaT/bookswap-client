import { useState } from "react";
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

  // create error and loading states, which will be used on the Add Book form
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const addBookToListing = async (imgUrl, title, author, page, releaseYear, location, condition) => {
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
      body: JSON.stringify({ imgUrl, title, author, page, releaseYear, location, condition }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    //parse the response from the API request into JSON format.
    const result = await response.json();

    // check if the response from the API request is not successful
    // set loading to false and set error to error message
    if (!response.ok) {
       // data loading is finished
      setLoading(false);
      // set the error to te error message the backend passes
      setError(result.error);
      // return false when the fetching does not give back a listing object
      return false;
    }
    // if response is ok
    if (response.ok) {
      // data loading is finished
      setLoading(false);
      // pass back the result
      return result;
    }
  };
  return { addBookToListing, error, loading };
};
