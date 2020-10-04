import {
  SET_RESULT,
  SET_SEARCH_VALUE,
  SET_FACETS,
  ADD_RESULT,
} from "./../actions/store";

export const initialState = {
  result: [],
  searchValue: "",
  facets: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_RESULT:
      return { ...state, result: action.result };
    case ADD_RESULT:
      return { ...state, result: [...state.result, ...action.result] };
    case SET_SEARCH_VALUE:
      return { ...state, searchValue: action.searchValue };
    case SET_FACETS:
      return { ...state, facets: action.facets };
    default:
      return state;
  }
}
