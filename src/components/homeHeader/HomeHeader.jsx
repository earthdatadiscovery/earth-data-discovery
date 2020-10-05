import React from "react";
import styled from "@emotion/styled";
import useNavigate from "../../hooks/useNavigate";

export default function HomeHeader({ about, children }) {
  const { navigate } = useNavigate();

  return (
    <WrapperHomeHeader about={about ? 1 : 0}>
      <LinkAboutUs onClick={() => navigate("/about")}>About us</LinkAboutUs>
      <LinkHome onClick={() => navigate("")}>Home</LinkHome>
      <ServerLinkUS href={"https://us.earthdatadiscovery.co/"}>
        <FlagImage src={require("../../assets/usa.svg")} alt="usa_flag" />
      </ServerLinkUS>
      <ServerLinkEU href={"https://eu.earthdatadiscovery.co/"}>
        <FlagImage src={require("../../assets/eu.svg")} alt="eu_flag" />
      </ServerLinkEU>
      {children}
    </WrapperHomeHeader>
  );
}

const FlagImage = styled.img`
  width: 100%;
  height: 100%;
`;

const WrapperHomeHeader = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  background-color: #3c4c56;
  @media screen and (max-width: 760px) {
    height: ${(props) => (props.about ? "200px" : "unset")};
  }
`;

const LinkAboutUs = styled.div`
  color: white;
  font-size: 18px;
  position: absolute;
  top: 15px;
  right: 15px;
  text-decoration: none;
  cursor: pointer;
  @media screen and (max-width: 760px) {
    top: 15px;
    right: "unset";
    left: 20px;
  }
`;

const LinkHome = styled.div`
  color: white;
  font-size: 18px;
  position: absolute;
  top: 40px;
  right: 38px;
  text-decoration: none;
  cursor: pointer;
  @media screen and (max-width: 760px) {
    top: 15px;
    right: 20px;
  }
`;

const ServerLinkUS = styled.a`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 70px;
  right: 15px;
  font-size: 25px;
  cursor: pointer;
  text-decoration: none;
  @media screen and (max-width: 760px) {
    top: 198px;
    right: 15px;
  }
`;

const ServerLinkEU = styled.a`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 69px;
  right: 60px;
  font-size: 25px;
  cursor: pointer;
  text-decoration: none;
  @media screen and (max-width: 760px) {
    top: 197px;
  }
`;
