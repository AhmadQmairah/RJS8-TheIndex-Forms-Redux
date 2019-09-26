import * as actionTypes from "../actions/actionTypes";

const initialState = {
  author: null,
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_AUTHOR_DETAIL:
      return {
        ...state,
        author: action.payload,
        loading: false
      };

    case actionTypes.SET_AUTHOR_LOADING:
      return {
        ...state,
        loading: true
      };

    case actionTypes.POST_BOOK:
      let NewAuthor = { ...state.author };

      NewAuthor.books.push(action.payload);
      console.log(state.author, NewAuthor);

      return {
        ...state,
        author: NewAuthor
      };

    default:
      return state;
  }
};

export default reducer;
