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

  const handleEdit = (editedBook) => {
    if (lenderBookList && lenderBookList.length > 0) {
      // map to create a new array with the modified book
      const updatedBookList = lenderBookList.map((book) => {
        return book.book._id === editedBook.book._id ? editedBook : book;
      });
      // set the updated book list to the state
      setLenderBookList(updatedBookList);
    }
  };

  const handleListingDelete = (listingId) => {
    if (lenderBookList && lenderBookList.length > 0) {
      // filter out the book that has been deleted
      const updatedBookList = lenderBookList.filter((book) => {
        return book.listing._id !== listingId;
      });
      // set the updated book list to the state
      setLenderBookList(updatedBookList);
    }
  }; 

  console.log(lenderBookList);
  return (
    <div className="my-5 py-5">
      <LenderListing
        books={lenderBookList}
        handleEdit={handleEdit}
        handleListingDelete={handleListingDelete}
        error={error}
      />
      <AddBook addBookToLenderList={addBookToLenderList} />
    </div>
  );
}

export default LendingPage;
