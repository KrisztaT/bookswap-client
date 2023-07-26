import React, { useState } from "react";
import BookSearch from "../components/BookSearch";
import SearchResult from "../components/SearchResult";

const BorrowingPage = () => {
    
  const [searchBookLists, setSearchBookLists] = useState([]);

  const addResultBooks = (resultBooks) => {
    setSearchBookLists( resultBooks);
  };

    return (
      <div className="my-5 py-5">
          <BookSearch  addResultBooks= {addResultBooks}/>
          <SearchResult resultBooks={searchBookLists}/>
      </div>
    );
  }
  
  export default BorrowingPage;