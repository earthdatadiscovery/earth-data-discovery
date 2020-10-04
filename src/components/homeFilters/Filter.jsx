import React from "react";
import styled from "@emotion/styled";
import { StoreContext } from "../../store/index";
import { addFilter, removeFilter } from "../../actions/store";

export default function Filter({ name, filters }) {
  const { state, dispatch } = React.useContext(StoreContext);

  const onChangeCheck = (target, filter, name) => {
    if (target.checked) {
      // console.log("YOU CHECKED FILTER : ", name, ":", filter);
      dispatch(addFilter(name, filter));
    } else {
      // console.log("YOU UNCHECKED CHECKED FILTER : ", name, ":", filter);
      dispatch(removeFilter(name, filter));
    }
  };
  return (
    <div>
      <span>{name}</span>
      {Object.entries(filters || {}).map(([namefilter, nbfilter]) => {
        return (
          <div namefilter={namefilter}>
            <input
              type="checkbox"
              name={namefilter}
              onChange={(event) =>
                onChangeCheck(event.target, namefilter, name)
              }
            />
            <label>{`${namefilter} (${nbfilter})`}</label>
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
