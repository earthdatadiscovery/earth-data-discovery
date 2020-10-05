export const SET_RESULT = "SET_RESULT";
export const SET_SEARCH_VALUE = "SET_SEARCH_VALUE";
export const SET_FACETS = "SET_FACETS";
export const ADD_RESULT = "ADD_RESULT";
export const SET_FACET_FILTERS = "SET_FACET_FILTERS";
export const ADD_FILTER = "ADD_FILTER";
export const REMOVE_FILTER = "REMOVE_FILTER";
export const SET_INFO_RESULTS = "SET_INFO_RESULTS";

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

export const setFacetFilters = (facetFilters) => ({
  type: SET_FACET_FILTERS,
  facetFilters: facetFilters,
});

export const addFilter = (name, filter) => ({
  type: ADD_FILTER,
  name: name,
  filter: filter,
});

export const removeFilter = (name, filter) => ({
  type: REMOVE_FILTER,
  name: name,
  filter: filter,
});

export const setInfoResults = (search) => ({
  type: SET_INFO_RESULTS,
  time: search.processingTimeMs,
  nbHits: search.nbHits,
  facets: search.facetsDistribution,
});
