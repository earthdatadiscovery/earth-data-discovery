import React from "react";
import styled from "@emotion/styled";
import SearchBar from "./../../components/search/SearchBar";
import HomeHeader from "./../../components/homeHeader/HomeHeader";
import Filters from "./../../components/homeFilters/Filters";
import RenderSearchResult from "./../../components/renderSearchResult/RenderSearchResult";
import { useMeili } from "./../../hooks/useMeili";

export default function Home() {
  const { getFacets } = useMeili();

  const [showFilters, setShowFilters] = React.useState(false);

  React.useEffect(() => {
    getFacets();
  }, []);

  return (
    <WrapperHome>
      <HomeHeader>
        <MainTitle>Earth Data Discovery</MainTitle>
        <SearchBar />
        <FiltersArrow onClick={() => setShowFilters((e) => !e)}>
          {showFilters ? "↑" : "↓"}
        </FiltersArrow>
        <Filters showFilters={showFilters} />
      </HomeHeader>
      <RenderSearchResult />
    </WrapperHome>
  );
}

const WrapperHome = styled.div`
  width: 100%;
  height: 100%;
`;

const MainTitle = styled.h1`
  color: white;
`;

const FiltersArrow = styled.div`
  padding: 10px;
  background-color: white;
  color: #3c3c3c;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 5px;
`;
