// custom hook for add book listing data
// this hook is responsible for making the API call to add book listing details to the database.
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { getApiBaseUrl } from "../utils/getApiUrl";

// get back the api url based on the hostname of the current URL.
const api = getApiBaseUrl();

// add book listing hook is responsible for calling the api endpoint
export const useAddBookToListing = () => {
  // use auth context and deconstruct user object (user who logged in)
  const { user } = useAuthContext();

  // create error and loading states, which will be used on the Add Book form
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  // function to manage api request
  const addBookToListing = async (
    imgUrl,
    title,
    author,
    page,
    releaseYear,
    location,
    condition
  ) => {
    // set states to starting state
    setLoading(true);
    setError(null);

    // only logged in users can access this functionality
    if (!user) {
      setError("Please login.");
      return;
    }

    // send a POST request to the server's '/api/listing' endpoint
    const response = await fetch(`${api}/api/listing`, {
      method: "POST",
      // include the request body as JSON with data: imgUrl, title, author, page, releaseYear, location, condition
      body: JSON.stringify({
        imgUrl,
        title,
        author,
        page,
        releaseYear,
        location,
        condition,
      }),
      // set the headers for the request, including 'Content-Type' as 'application/json'
      // and 'Authorization' to authenticate the user using their bearer token
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
