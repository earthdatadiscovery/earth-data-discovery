import React from "react";
import styled from "@emotion/styled";
import { StoreContext } from "../../store/index";

export default function Filter({ name, filters }) {
  const { state, dispatch } = React.useContext(StoreContext);

  return (
    <div>
      <span>{name}</span>
      {Object.entries(filters || {}).map(([key, filter]) => {
        return (
          <div key={key}>
            <input type="checkbox" name={key} />
            <label>{`${key} (${filter})`}</label>
          </div>
        );
      })}
    </div>
  );
}

// const WrapperFilters = styled.div`
//   display: ${(props) => (!props.topPosition ? `none` : "flex")};
//   position: absolute;
//   bottom: ${(props) =>
//     props.topPosition ? `${props.topPosition}px` : "unset"};
//   width: 100%;
//   height: 40px;
//   background-color: #3c3c3c;
//   transition: all 300ms ease-in-out;
//   /* justify-content: space-between; */
//   /* align-items: center; */
// `;
