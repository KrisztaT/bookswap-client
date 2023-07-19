import { createContext, useReducer } from "react";
import { bookAndListingReducer } from "../reducers/BookAndListingReducer";

export const BookAndListingContext = createContext();

export const BookAndListingContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookAndListingReducer, []);

  console.log("BookAndListingContextContext state: ", state);

  return (
    <BookAndListingContext.Provider value={{ ...state, dispatch }}>
      {children}
    </BookAndListingContext.Provider>
  );
};