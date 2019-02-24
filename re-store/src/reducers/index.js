const initiallState = {
  books: [],
  loading: true
};

const reducer = (state = initiallState, action) => {
  switch (action.type) {
    case "BOOKS_REQUESTED":
      return {
        books: [],
        loading: true
      };
    case "BOOKS_LOADED":
      return {
        books: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;