import React from "react";
import styled from "@emotion/styled";
import { StoreContext } from "../../store/index";
import Filter from "./Filter";

export default function Filters({ topPosition }) {
  const { state, dispatch } = React.useContext(StoreContext);

  return (
    <WrapperFilters topPosition={topPosition}>
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
  display: ${(props) => (!props.topPosition ? `none` : "flex")};
  position: absolute;
  bottom: ${(props) =>
    props.topPosition ? `${props.topPosition}px` : "unset"};
  width: 100%;
  height: 40px;
  background-color: #3c3c3c;
  transition: all 300ms ease-in-out;
  /* justify-content: space-between; */
  /* align-items: center; */
`;
