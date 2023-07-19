export const bookAndListingReducer = (state, action) => {
  switch (action.type) {
    case "LIST_BOOK":
      return action.payload;
    case "ADD_BOOK":
      return  [...state, action.payload];
    case "UPDATE_BOOK":
      return {
        ...state,
        bookAndList: state.bookAndList.map((bookAndList) =>
        bookAndList.id === action.bookAndList.id ? action.bookAndList : bookAndList
        ),
      };
    default:
      return state;
  }
};
