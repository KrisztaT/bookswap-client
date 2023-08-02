// custom hook for updating book and listing information
// this hook is responsible for making the API call to update the book and listing details in the backend.
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { getApiBaseUrl } from "../utils/getApiUrl";

// get back the api url based on the hostname of the current URL.
const api = getApiBaseUrl();

export const useUpdateBookAndListing = () => {
  // use the useAuthContext hook to access the user's token for authorization.
  const { user } = useAuthContext();
  // initialise error and loading states using the useState hook.
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  // function to update book and listing details
  const updateBookAndListing = async (editedBook, bookId, listingId) => {
    // set states to starting state
    setLoading(true);
    setError(null);

    // check if the user is authenticated, if not, set an error message and return.
    if (!user) {
      setError("Please login.");
      return;
    }

    // make a PATCH request to the backend API to update the book and listing information.
    const response = await fetch(`${api}/api/listing/${bookId}/${listingId}`, {
      method: "PATCH",
      // include the request body including the changes requested on the edit modal
      body: JSON.stringify(editedBook),
      // set the headers for the request, including 'Content-Type' as 'application/json'
      // and 'Authorization' to authenticate the user using their bearer token
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });

    // parse the response from the API request into JSON format.
    const result = await response.json();

    // if the response status is not ok
    if (!response.ok) {
      // data loading is finished
      setLoading(false);
      // set the error state with the error message from the server
      setError(result.error);
      // return false when the fetching does not give back a listing object
      return false;
    }

    // if the response status is ok
    if (response.ok) {
      // data loading is finished
      setLoading(false);
      // pass back the result
      return result;
    }
  };

  return { updateBookAndListing, error, loading };
};
