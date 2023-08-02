// custom hook for searching book listings
// this hook is responsible for making the API call to search book listing details
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

// retrieve the hostname of the current URL.
const hostname = window.location.hostname;
// if the hostname is localhost the dev backend is used if not the prod backend is used
const api =
  hostname === "localhost"
    ? process.env.REACT_APP_DEV_BACKEND_URL
    : process.env.REACT_APP_PROD_BACKEND_URL;

// search book listing is for searching book listing in the database based on title
export const useSearchBookListings = () => {
  // use auth context and deconstruct user object (user who logged in)
  const { user } = useAuthContext();

  // create error and loading states, which will be used on the search form
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  // function to manage api request
  const searchBookListings = async (
    searchTitle,
    author,
    location,
    condition
  ) => {
    // set states to starting state
    setError(null);
    setLoading(true);

    // only logged in users can access this functionality
    if (!user) {
      setError("Please login.");
      return;
    }

    // build the base API URL title is mandatory to provide
    const titleQueryParam = `title=${encodeURIComponent(searchTitle)}`;

    // build the optional query parameters based on user input
    const authorQueryParam = author
      ? `&author=${encodeURIComponent(author)}`
      : "";
    const locationQueryParam = location
      ? `&location=${encodeURIComponent(location)}`
      : "";
    const conditionQueryParam = condition
      ? `&condition=${encodeURIComponent(condition)}`
      : "";

    // build the URL with the optional query parameters to fetch
    const fetchURL = `${api}/api/listing/search?${titleQueryParam}${authorQueryParam}${locationQueryParam}${conditionQueryParam}`;

    // fetch search endpoint from listing
    const response = await fetch(fetchURL, {
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
  return { searchBookListings, error, loading };
};
