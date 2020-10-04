import React from "react";
import styled from "@emotion/styled";
import useNavigate from "../../hooks/useNavigate";

export default function HomeHeader({ children }) {
  const { navigate } = useNavigate();

  return (
    <WrapperHomeHeader>
      <LinkAboutUs onClick={() => navigate("/about")}>About us</LinkAboutUs>
      <LinkHome onClick={() => navigate("")}>Home</LinkHome>
      <ServerLinkUS href={"https://us.earthdatadiscovery.co/"}>🇺🇸</ServerLinkUS>
      <ServerLinkEU href={"https://eu.earthdatadiscovery.co/"}>🇪🇺</ServerLinkEU>
      {children}
    </WrapperHomeHeader>
  );
}

const WrapperHomeHeader = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  background-color: #3c4c56;
`;

const LinkAboutUs = styled.div`
  color: white;
  font-size: 18px;
  position: absolute;
  top: 15px;
  right: 15px;
  text-decoration: none;
  cursor: pointer;
`;

const LinkHome = styled.div`
  color: white;
  font-size: 18px;
  position: absolute;
  top: 40px;
  right: 38px;
  text-decoration: none;
  cursor: pointer;
`;

const ServerLinkUS = styled.div`
  position: absolute;
  top: 65px;
  right: 15px;
  font-size: 25px;
  cursor: pointer;
  text-decoration: none;
`;

const ServerLinkEU = styled.a`
  position: absolute;
  top: 65px;
  right: 60px;
  font-size: 25px;
  cursor: pointer;
  text-decoration: none;
`;
