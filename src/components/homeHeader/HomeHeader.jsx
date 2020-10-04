import React from "react";
import styled from "@emotion/styled";

export default function HomeHeader({ children }) {
  return <WrapperHomeHeader>{children}</WrapperHomeHeader>;
}

const WrapperHomeHeader = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  background-color: #3c3c3c;
  max-height: 20%;
`;
