import React from "react";
import styled from "@emotion/styled";
import SearchBar from "./../../components/search/SearchBar";
import HomeHeader from "./../../components/homeHeader/HomeHeader";
import Filters from "./../../components/homeFilters/Filters";
import RenderSearchResult from "./../../components/renderSearchResult/RenderSearchResult";

export default function Home() {
  const [showFilters, setShowFilters] = React.useState(false);

  return (
    <WrapperHome>
      <HomeHeader>
        <HeaderImage
          src={require("../../assets/logo_edd.png")}
          alt="doc_image"
        />
        <SearchBar />
        <FiltersArrow onClick={() => setShowFilters((e) => !e)}>
          {showFilters ? "↑" : "↓"}
        </FiltersArrow>
      </HomeHeader>
      <Filters showFilters={showFilters} />
      <RenderSearchResult />
    </WrapperHome>
  );
}

const WrapperHome = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const FiltersArrow = styled.div`
  padding: 10px;
  background-color: #3dd2cc;
  color: #3c4c56;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 15px;
`;

const HeaderImage = styled.img`
  height: 10vw;
  position: relative;
  @media screen and (max-width: 1000px) {
    height: 100px;
  }
`;

const OSText = styled.span`
  color: #3dd2cc;
  font-size: 19px;
  text-align: left;
  margin-bottom: 6px;
  @media screen and (max-width: 760px) {
    font-size: 16px;
  }
`;
