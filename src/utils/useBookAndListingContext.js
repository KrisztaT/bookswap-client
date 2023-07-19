import { BookAndListingContext } from "../contexts/BookAndListingContext";
import { useContext } from "react";

export const useBookAndListingContext = () => {
    const context = useContext(BookAndListingContext)

    if (!context){
        throw Error('useBookAndListingContext must be used inside an BookAndListingContextProvider')
    }

    return context
}