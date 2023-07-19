import { useAuthContext } from "../utils/useAuthContext";

// retrieve the hostname of the current URL.
const hostname = window.location.hostname;

// if the hostname is localhost the dev backend is used if not the prod backend is used
const api =
  hostname === "localhost"
    ? process.env.REACT_APP_DEV_BACKEND_URL
    : process.env.REACT_APP_PROD_BACKEND_URL;

// define searchBook hook, it checks if the book exists in the database
export const useSearchBook = () => {
  const { user } = useAuthContext();

  // searchBook async function to query database based on title and author
  const searchBook = async (title, author) => {
    // only logged in users can access this functionality
    if (!user) {
      throw new Error("Please login.");
    }

    // create a query string for the URL based on the title and author parameters.
    const queryParams = new URLSearchParams({ title, author }).toString();
    const url = `${api}/api/book/search?${queryParams}`;

    try {
      // api fetch request for searching the book
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });

      // check if the response from the API request is not successful and send error message
      if (!response.ok) {
        throw new Error("An error occurred while searching for the book.");
      }

      //parse the response from the API request into JSON format.
      const result = await response.json();
      // return result it is either {exits: true} or {exits: false}
      return result;
    } catch (error) {
      //handle any errors that occur during the execution of the try block.
      throw new Error("An error occurred while searching for the book.");
    }
  };

  return { searchBook };
};
