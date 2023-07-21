import React, { useState, useEffect } from "react";
import AddBook from "../components/AddBook";
import LenderListing from "../components/LenderListing";
import { useGetLenderListing } from "../hooks/useGetLenderListing";
import { useAuthContext } from "../hooks/useAuthContext";

function LendingPage() {
  const [lenderBookList, setLenderBookList] = useState([]);
  const { getLenderListing, error } = useGetLenderListing();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchData = async () => {
      // check if the user is available before making the API call
      if (user) {
        const lenderListedBooks = await getLenderListing();
        if (lenderListedBooks !== false) {
          setLenderBookList(lenderListedBooks);
        }
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const addBookToLenderList = (newBook) => {
    // update the book list in the local state by adding the new book
    setLenderBookList([...lenderBookList, newBook]);
  };

  const handleBookEdit = (bookId) => {
    // Handle the edit functionality for the book
    console.log("Edit book.");
  };

  const handleListingEdit = (listingId) => {
    // Handle the edit functionality for the book
    console.log("Edit listing.");
  };

  const handleListingDelete = (listingId) => {
    // Handle the delete functionality for the book
    console.log("Delete listing.");
  };

  console.log(lenderBookList);
  return (
    <div className="my-5 py-5">
      <AddBook addBookToLenderList={addBookToLenderList} />
      <LenderListing
        books={lenderBookList}
        handleBookEdit={handleBookEdit}
        handleListingDelete={handleListingDelete}
        handleListingEdit={handleListingEdit}
        error={error}
      />
    </div>
  );
}

export default LendingPage;
