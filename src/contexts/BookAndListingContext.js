import { createContext, useReducer } from "react";
import { bookAndListingReducer } from "../reducers/BookAndListingReducer";

export const bookAndListingContext = createContext();

export const BookAndListingContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookAndListingReducer, { bookAndList: null });

  console.log("BookAndListingContextContext state: ", state);

  return (
    <bookAndListingContext.Provider value={{ ...state, dispatch }}>
      {children}
    </bookAndListingContext.Provider>
  );
};