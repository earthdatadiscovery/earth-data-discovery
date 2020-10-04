import React from "react";
import styled from "@emotion/styled";
import { StoreContext } from "../../store/index";
import { addFilter, removeFilter } from "../../actions/store";

export default function Filter({ name, filters }) {
  const { state, dispatch } = React.useContext(StoreContext);

  const onChangeCheck = (target, filter, name) => {
    if (target.checked) {
      dispatch(addFilter(name, filter));
    } else {
      dispatch(removeFilter(name, filter));
    }
  };
  return (
    <div>
      <fieldset class="checkboxgroup">
        <p>{name}</p>
        {Object.entries(filters || {}).map(([namefilter, nbfilter], index) => {
          return (
            <div namefilter={namefilter} key={`${index}-${namefilter}`}>
              <label>
                <input
                  type="checkbox"
                  name={namefilter}
                  onChange={(event) =>
                    onChangeCheck(event.target, namefilter, name)
                  }
                />
              </label>
              <label>{`${namefilter} (${nbfilter})`}</label>
            </div>
          );
        })}
      </fieldset>
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
