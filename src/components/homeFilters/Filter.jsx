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

  const isFilterSelected = (name) => {
    if (state?.facetFilters[name] === undefined) return false;
    return true;
  };

  return (
    <WrapperFilter>
      <FilterName>{name}</FilterName>
      <WrapperFiltersSelected>
        {Object.entries(filters || {})
          .sort((a, b) => b[1] - a[1])
          .map(([namefilter, nbfilter], index) => {
            if (nbfilter > 0)
              return (
                <div namefilter={namefilter} key={`${index}:${namefilter}`}>
                  <label>
                    <input
                      type="checkbox"
                      name={namefilter}
                      checked={isFilterSelected(`${name}:${namefilter}`)}
                      onChange={(event) =>
                        onChangeCheck(event.target, namefilter, name)
                      }
                    />
                  </label>
                  <FilterNameCheck>{`${namefilter} (${nbfilter})`}</FilterNameCheck>
                </div>
              );
          })}
      </WrapperFiltersSelected>
    </WrapperFilter>
  );
}

const WrapperFiltersSelected = styled.div`
  width: 220px;
  height: 150px;
  overflow-y: scroll;
`;

const WrapperFilter = styled.div`
  padding: 15px;
`;

const FilterName = styled.div`
  color: white;
  text-align: center;
  margin-bottom: 10px;
  background-color: #3dd2cc;
  padding: 5px 10px;
  border-radius: 3px;
`;

const FilterNameCheck = styled.span`
  font-size: 10px;
  color: white;
`;

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
