import React, { useState } from "react";
import AddBook from "../components/AddBook";
import LenderListing from "../components/LenderListing";

function LendingPage() {
  const [lenderBookList, setLenderBookList] = useState([]);

  /*   useEffect(() => {
    // fetch book details
  }, []); */

  const addBookToLenderList = (newBook) => {
    // update the book list in the local state by adding the new book
    setLenderBookList([...lenderBookList, newBook]);
  };

  const handleBookEdit = (bookId) => {
    // Handle the edit functionality for the book
    console.log("Edit book.");
  };

  const handleListingEdit = ( listingId) => {
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
      />
    </div>
  );
}

export default LendingPage;
