export const SET_RESULT = "SET_RESULT";
export const SET_SEARCH_VALUE = "SET_SEARCH_VALUE";
export const SET_FACETS = "SET_FACETS";
export const ADD_RESULT = "ADD_RESULT";

export const setResult = (result) => ({
  type: SET_RESULT,
  result: result,
});

export const addResult = (result) => ({
  type: ADD_RESULT,
  result: result,
});

export const setSearchValue = (searchValue) => ({
  type: SET_SEARCH_VALUE,
  searchValue: searchValue,
});

export const setFacets = (facets) => ({
  type: SET_FACETS,
  facets: facets,
});
