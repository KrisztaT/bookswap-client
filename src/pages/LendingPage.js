import React, { useState, useEffect } from "react";
import AddBook from "../components/AddBook";
import LenderListing from "../components/LenderListing";
import { useGetLenderListing } from "../hooks/useGetLenderListing";
import { useAuthContext } from "../hooks/useAuthContext";
import "../styles/Page.css";

function LendingPage() {
  // state for the lenderBookList, set to empty
  const [lenderBookList, setLenderBookList] = useState([]);
  // use the hook for fetching data
  const { getLenderListing, error } = useGetLenderListing();
  const { user } = useAuthContext();

  // useEffect is used to fetch lenders book list upon lending page load
  useEffect(() => {
    const fetchData = async () => {
      // check if the user is available before making the API call
      if (user) {
        const lenderListedBooks = await getLenderListing();
        // if the fetch succeeds
        if (lenderListedBooks !== false) {
          // set state with the fetched data
          setLenderBookList(lenderListedBooks);
        }
      }
    };
    // call function to fetch data
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const addBookToLenderList = (newBook) => {
    // update the book list in the local state by adding the new book
    setLenderBookList([...lenderBookList, newBook]);
  };

  // function used for managing edit changes in the book details
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

  // function is to manage listing deletion
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

  // state and handler methods passed down to the children components
  return (
    <div className="page-upper-padding">
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
