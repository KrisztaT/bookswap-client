import BookSearch from "../components/BookSearch";
import SearchResult from "../components/SearchResult";

const BorrowingPage = () => {
    
    return (
      <div className="my-5 py-5">
          <BookSearch />
          <SearchResult />
      </div>
    );
  }
  
  export default BorrowingPage;