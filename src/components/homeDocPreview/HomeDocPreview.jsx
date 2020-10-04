import React from "react";
import styled from "@emotion/styled";
import HighlightText from "../utils/HighlightText";

export default function HomeDocPreview({ doc }) {
  return (
    <WrapperHomeDocPreview>
      {/* <WrapperDocImage>
        <DocImage src={doc?.img_url} alt="doc_image" />
      </WrapperDocImage> */}
      <DocTitle>
        {HighlightText(doc?._formatted?.title, doc?._matchesInfo)}
      </DocTitle>
      <DocDescription>
        {HighlightText(doc?._formatted?.summary, doc?._matchesInfo)}
      </DocDescription>
      <LinkButton
        href={`https://cmr.earthdata.nasa.gov/search/concepts/${doc?.id}`}
      >
        Link
      </LinkButton>
    </WrapperHomeDocPreview>
  );
}

const WrapperHomeDocPreview = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 9px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// const WrapperDocImage = styled.div`
//   position: relative;
//   width: 300px;
//   height: 200px;
//   overflow: hidden;
// `;

const DocImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
`;

const DocTitle = styled.div`
  * {
    font-size: 22px;
    color: #3c3c3c;
    font-weight: bold;
    word-break: break-word;
  }
`;

const DocDescription = styled.div`
  * {
    font-size: 18px;
    color: #3c3c3c;
    word-break: break-word;
  }
`;

const LinkButton = styled.a`
  background-color: #3c3c3c;
  color: white;
  padding: 10px 15px;
  border-radius: 18px;
  display: flex;
  justify-content: center;
`;
