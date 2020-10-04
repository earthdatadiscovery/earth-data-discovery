import React from "react";
import styled from "@emotion/styled";
import { StoreContext } from "../../store/index";
import Filter from "./Filter";

export default function Filters({ showFilters }) {
  const { state, dispatch } = React.useContext(StoreContext);

  return (
    <WrapperFilters showFilters={showFilters}>
      {Object.entries(state?.facets || {}).map(([key, filters]) => {
        return <Filter key={key} name={key} filters={filters} />;
      })}
      {/* <span>Category 1</span>
      <input type="checkbox" name="Bonjour" id="lol" />
      <label for="lol">Bonjour</label> */}
    </WrapperFilters>
  );
}

const WrapperFilters = styled.div`
  display: ${(props) => (props.showFilters ? `flex` : "none")};
  width: 100%;
  background-color: #3c4c56;
  transition: all 300ms ease-in-out;
  flex-wrap: wrap;
  justify-content: space-between;
  z-index: 2;
  @media screen and (max-width: 760px) {
    justify-content: center;
  }
`;
