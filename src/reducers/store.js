import {
  SET_RESULT,
  SET_SEARCH_VALUE,
  SET_FACETS,
  ADD_RESULT,
  SET_FACET_FILTERS,
  ADD_FILTER,
  REMOVE_FILTER,
  SET_INFO_RESULTS,
} from "./../actions/store";

export const initialState = {
  result: [],
  searchValue: "",
  facets: [],
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  facetFilters: {},
  responseTime: 0,
  nbHits: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_RESULT:
      return { ...state, result: action.result };
    case ADD_RESULT:
      return { ...state, result: [...state.result, ...action.result] };
    case SET_SEARCH_VALUE:
      return { ...state, searchValue: action.searchValue };
    case SET_INFO_RESULTS:
      return {
        ...state,
        responseTime: action.time,
        nbHits: action.nbHits,
        facets: action.facets,
      };
    case SET_FACETS:
      return { ...state, facets: action.facets };
    case SET_FACET_FILTERS:
      return { ...state, facetFilters: action.facetFilters };
    case ADD_FILTER:
      const filter = action.filter;
      const name = action.name;
      var filters = { ...state.facetFilters };
      filters[`${name}:${filter}`] = {
        name: action.name,
        filter: action.filter,
      };
      return {
        ...state,
        facetFilters: filters,
      };
    case REMOVE_FILTER:
      const filte = action.filter;
      const nam = action.name;
      var newFilters = { ...state.facetFilters };
      delete newFilters[`${nam}:${filte}`];
      return { ...state, facetFilters: newFilters };
    default:
      return state;
  }
}
