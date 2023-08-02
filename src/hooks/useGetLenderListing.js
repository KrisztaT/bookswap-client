// custom hook for get lender listing data
// this hook is responsible for making the API call to get lender listing from the database.
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

// retrieve the hostname of the current URL.
const hostname = window.location.hostname;
// if the hostname is localhost the dev backend is used if not the prod backend is used
const api =
  hostname === "localhost"
    ? process.env.REACT_APP_DEV_BACKEND_URL
    : process.env.REACT_APP_PROD_BACKEND_URL;

// get lender listing is responsible calling the api endpoint for lender listings
export const useGetLenderListing = () => {
  // use auth context and deconstruct user object (user who logged in)
  const { user } = useAuthContext();

  // create error states, which will be used on the LendingListing component
  const [error, setError] = useState(null);

  // function to manage api request
  const getLenderListing = async () => {
    // error state is set to null at start
    setError(null);

    // only logged in users can access this functionality
    if (!user) {
      setError("Please login.");
      return;
    }

    // fetch listing endpoint to get back lender's listings
    const response = await fetch(`${api}/api/listing`, {
      method: "GET",
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
    if (!response.ok) {
      // set the error to te error message the backend passes
      setError(result.error);
      // return false when the fetching does not give back a listing data
      return false;
    }
    // if response is ok
    if (response.ok) {
      // pass back the result
      return result;
    }
  };
  return { getLenderListing, error };
};
