import React from "react";
import { StoreContext } from "../../store/index";
import styled from "@emotion/styled";
import { useMeili } from "../../hooks/useMeili";

export default function SearchBar() {
  const [searchedValue, setSearchedValue] = React.useState("");
  const { search, getFacets } = useMeili();
  const { state, dispatch } = React.useContext(StoreContext);

  React.useEffect(() => {
    search({
      toSearch: searchedValue,
      attributesToCrop: ["summary"],
      cropLength: 50,
      attributesToHighlight: ["*"],
      facetFilters: state.facetFilters,
      matches: true,
    });
  }, [searchedValue, state.facetFilters]);

  // React.useEffect(() => {
  //   getFacets();
  // }, [state.facetFilters]);

  React.useEffect(() => {
    console.log(state.result);
  }, [state.result]);

  return (
    <SearchInput
      type="text"
      value={searchedValue}
      onChange={(event) => setSearchedValue(event.target.value)}
      className="px-6 py-4 w-full text-black"
      placeholder="Search"
    />
  );
}

const SearchInput = styled.input`
  width: 60%;
  height: 40px;
  border-radius: 9px;
  border: none;
  padding-left: 15px;
  font-size: 21px;
  @media screen and (max-width: 760px) {
    width: 80%;
  }
`;
