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

  React.useEffect(() => {}, [state.result]);

  return (
    <WrapperSearch>
      <TimeText>
        {`${state.nbHits} datasets`}{" "}
        {!!state.responseTime &&
          ` | Search processed in ${state.responseTime}ms`}
      </TimeText>
      <SearchInput
        type="text"
        value={searchedValue}
        onChange={(event) => setSearchedValue(event.target.value)}
        className="px-6 py-4 w-full text-black"
        placeholder="Search"
      />
    </WrapperSearch>
  );
}

const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 9px;
  border: none;
  padding-left: 15px;
  font-size: 21px;
`;

const TimeText = styled.span`
  color: #3dd2cc;
  text-align: center;
  margin-bottom: 5px;
  @media screen and (max-width: 760px) {
    font-size: 12px;
  }
`;

const WrapperSearch = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 760px) {
    width: 80%;
  }
`;
