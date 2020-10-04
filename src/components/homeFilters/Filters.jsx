import React from "react";
import styled from "@emotion/styled";

export default function Filters() {
  return <WrapperFilters></WrapperFilters>;
}

const WrapperFilters = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
  background-color: #3c3c3c;
`;
