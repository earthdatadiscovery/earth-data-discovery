import React from "react";
import styled from "@emotion/styled";
import { useMeili } from "../../hooks/useMeili";
import { StoreContext } from "../../store/index";
import HomeDocPreview from "./../../components/homeDocPreview/HomeDocPreview";

export default function RenderSearchResult() {
  const { state } = React.useContext(StoreContext);
  const [scrollOffsetSteps, setScrollOffsetSteps] = React.useState(20);
  const { search } = useMeili();
  const container = React.useRef(null);

  React.useEffect(() => {
    container.current.scrollTo(0, 0);
    setScrollOffsetSteps(20);
  }, [state.searchValue]);

  const handleScroll = (e) => {
    const target = e.target;
    if (Math.round(target.scrollHeight - target.scrollTop) === target.clientHeight) {
      search({
        offset: scrollOffsetSteps,
        toSearch: state.searchValue,
        attributesToCrop: ["summary"],
        facetsDistribution: ["*"],
        cropLength: 50,
        attributesToHighlight: ["*"],
        matches: true,
      });
      setScrollOffsetSteps((e) => e + 20);
    }
  };

  return (
    <WrapperSearchResult
      ref={container}
      onScroll={handleScroll}
      noResult={state?.searchValue?.length && !state?.result?.length}
    >
      {state?.searchValue?.length && !state?.result?.length ? (
        <ResultMessage>No results for your search</ResultMessage>
      ) : (
        state?.result.map((doc, index) => {
          return <HomeDocPreview doc={doc} key={index + "list home docs"} />;
        })
      )}
    </WrapperSearchResult>
  );
}

const WrapperSearchResult = styled.div`
  display: flex;
  justify-content: ${(props) => (props.noResult ? "center" : "space-around")};
  align-items: ${(props) => (props.noResult ? "center" : "space-around")};
  flex-wrap: wrap;
  overflow-y: scroll;
  padding: 20px;
`;

const ResultMessage = styled.h3`
  color: #3c4c56;
  font-size: 18px;
`;
