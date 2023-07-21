import React, { useState } from "react";
import AddBook from "../components/AddBook";

function LendingPage() {
  const [lenderBookList, setLenderBookList] = useState([]);

  /*   useEffect(() => {
    // fetch book details
  }, []); */

  const addBookToLenderList = (newBook) => {
    // update the book list in the local state by adding the new book
    setLenderBookList([...lenderBookList, newBook]);
  };

  console.log(lenderBookList);
  return (
    <div className="my-5 py-5">
      <AddBook addBookToLenderList={addBookToLenderList} />
    </div>
  );
}

export default LendingPage;
