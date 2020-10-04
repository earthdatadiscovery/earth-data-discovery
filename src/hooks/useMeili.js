import React from "react";
import { StoreContext } from "../store";
import {
  setResult,
  setSearchValue,
  setFacets,
  addResult,
} from "../actions/store";
import MeiliSearch from "meilisearch";

/*
 ** This custom hook is used to manage MeiliSearch.
 */

const client = new MeiliSearch({
  host: process.env.REACT_APP_MEILI_HOST,
  apiKey: process.env.REACT_APP_MEILI_PUBLIC_KEY,
});

const index = client.getIndex("earthdata");

export function useMeili() {
  const { state, dispatch } = React.useContext(StoreContext);

  // Methods
  async function search({
    toSearch = "",
    offset = null,
    limit = null,
    filters = null,
    facetFilters = null,
    facetsDistribution = null,
    attributesToRetrieve = null,
    attributesToCrop = null,
    cropLength = null,
    attributesToHighlight = null,
    matches = null,
  }) {
    // console.log("facetfilters : ", facetFilters);
    facetFilters = getCorrectFacets();
    // console.log("facetfilters : ", facetFilters);

    const search = await index.search(toSearch, {
      offset,
      limit,
      filters,
      facetFilters,
      facetsDistribution,
      attributesToRetrieve,
      attributesToCrop,
      cropLength,
      attributesToHighlight,
      matches,
    });
    if (!offset) {
      dispatch(setSearchValue(toSearch));
      dispatch(setResult(search.hits));
    } else dispatch(addResult(search.hits));
  }

  async function getDocument(id) {
    const document = await index.getDocument(id);
    return document;
  }

  async function getDocuments(offset, limit) {
    const documents = await index.getDocuments({
      offset: offset,
      limit: limit,
    });
    return documents;
  }

  async function getFacets() {
    const res = await index.search(null, {
      facetsDistribution: ["*"],
    });
    dispatch(setFacets(res.facetsDistribution));
  }

  function getCorrectFacets() {
    const filtersStore = state.facetFilters;
    const finalFilters = [];
    const obj = Object.entries(filtersStore || {}).map(([key, value]) => {
      return value.filter;
    });
    console.log("OBJJJJJ", obj);

    return null;
  }

  return {
    search,
    getFacets,
  };
}
