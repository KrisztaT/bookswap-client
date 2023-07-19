export const bookAndListingReducer = (state, action) => {
  switch (action.type) {
    case "LIST_BOOK":
      return { book: action.payload };
    case "ADD_BOOK":
      return { book: [action.payload, ...state.book] };
    case "UPDATE_BOOK":
      return {
        ...state,
        book: state.book.map((book) =>
          book.id === action.book.id ? action.book : book
        ),
      };
    default:
      return state;
  }
};
