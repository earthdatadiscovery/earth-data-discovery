import React from "react";
import { StoreContext } from "../store";
import {
  setResult,
  setSearchValue,
  setFacets,
  addResult,
  setInfoResults,
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
    toSearch = null,
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
    if (facetFilters != null) facetFilters = getCorrectFacets(facetFilters);
    if (toSearch === "") toSearch = null;
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
      dispatch(setInfoResults(search));
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
    const facetFilters = getCorrectFacets();
    const res = await index.search(null, {
      facetsDistribution: ["*"],
      facetFilters,
    });
    dispatch(setFacets(res.facetsDistribution));
  }

  function getCorrectFacets() {
    const filtersStore = state.facetFilters;
    const finalFilters = [];

    const arrayName = Object.entries(filtersStore || {}).map(([key, value]) => {
      return value.name;
    });

    const triName = arrayName.filter((name, index) => {
      return arrayName.indexOf(name) === index;
    });

    const test = triName.map((element) => {
      const tab = Object.entries(filtersStore || {}).map(([key, value]) => {
        if (element === value.name) {
          return key;
        } else return;
      });
      return tab.filter(Boolean);
    });

    return test.length > 0 ? test : null;
  }

  return {
    search,
    getFacets,
  };
}
