import React, { useState } from "react";
import BookSearch from "../components/BookSearch";
import SearchResult from "../components/SearchResult";
import "../styles/Page.css";

const BorrowingPage = () => {
  // state to store the list of books returned from the search
  const [searchBookLists, setSearchBookLists] = useState([]);

  // function to update the state with the list of books when a search is performed
  const addResultBooks = (resultBooks) => {
    setSearchBookLists(resultBooks);
  };

  return (
    <div className="page-upper-padding mb-5">
      <BookSearch addResultBooks={addResultBooks} />
      <SearchResult resultBooks={searchBookLists} />
    </div>
  );
};

export default BorrowingPage;
