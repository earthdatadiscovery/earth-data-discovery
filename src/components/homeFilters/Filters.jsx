import React from "react";
import styled from "@emotion/styled";
import { StoreContext } from "../../store/index";
import Filter from "./Filter";

export default function Filters({ showFilters }) {
  const { state, dispatch } = React.useContext(StoreContext);

  return (
    <WrapperFilters showFilters={showFilters}>
      {Object.entries(state?.facets || {})
        .sort()
        .map(([key, filters]) => {
          return <Filter key={key} name={key} filters={filters} />;
        })}
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
    height: 250px;
    overflow-y: scroll;
  }
`;
