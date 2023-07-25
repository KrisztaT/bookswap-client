// custom hook for delete listing information
// this hook is responsible for making the API call to delete listing details in the backend.
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

// get the hostname of the current URL to determine the API endpoint.
const hostname = window.location.hostname;
const api =
  hostname === "localhost"
    ? process.env.REACT_APP_DEV_BACKEND_URL
    : process.env.REACT_APP_PROD_BACKEND_URL;

export const useDeleteListing = () => {
  // use the useAuthContext hook to access the user's token for authorization.
  const { user } = useAuthContext();
  // initialize error and loading states using the useState hook.
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  // function to update book and listing details
  const deleteListing = async ( listingId) => {
    setLoading(true);
    setError(null);

    // check if the user is authenticated, if not, set an error message and return.
    if (!user) {
      setError("Please login.");
      return;
    }

    // make a DELETE request to the backend API to delete listing information.
    const response = await fetch(`${api}/api/listing//${listingId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });

    // parse the response from the API request into JSON format.
    const result = await response.json();

    // if the response status is not ok, set the error state with the error message from the server, set loading to false and return false.
    if (!response.ok) {
      setLoading(false);
      setError(result.error);
      return false;
    }

    // if the response status is ok, set the loading state to false and return the result.
    if (response.ok) {
      setLoading(false);
      return result;
    }
  };

  return { deleteListing, error, loading};
};