import React from "react";
import styled from "@emotion/styled";
import HighlightText from "../utils/HighlightText";

export default function HomeDocPreview({ doc }) {
  // SET PLACEHOLDER IMAGE

  const img_list = {
    SCIOPS: "img001.png",
    AU_AADC: "img002.jpg",
    NOAA_NCEI: "img003.jpg",
    GHRC_CLOUD: "img004.jpg",
    LARC_ASDC: "img005.jpg",
    CDDIS: "img001.png",
    GES_DISC: "img002.jpg",
    ORNL_DAAC: "img003.jpg",
    NSIDC_ECS: "img004.jpg",
  };

  let img_url = "img005.jpg";
  if (img_list[doc.data_center] !== undefined) {
    img_url = img_list[doc.data_center];
  }

  // SET PLACEHOLDER IMAGE

  return (
    <MainWrapperHomeDoc>
      <LinkButton
        target="_blank"
        href={`https://cmr.earthdata.nasa.gov/search/concepts/${doc?.id}`}
      >
        Discover
      </LinkButton>
      <WrapperHomeDocPreview>
        <WrapperDocImage>
          <DocImage src={require(`../../assets/${img_url}`)} alt="doc_image" />
        </WrapperDocImage>
        <DocTitle>{HighlightText(doc?._formatted?.title)}</DocTitle>
        <DocDescription>
          {HighlightText(doc?._formatted?.summary)}
        </DocDescription>
        <DocGranule>{`Granules : ${doc?._formatted?.granules}`}</DocGranule>
        <WrapperCategories>
          {Object.entries(doc?._formatted?.subcategories || {}).map(
            ([key, filters], index) => {
              if (index > 1) return;
              {
                /* <Category>TODO</Category> */
              }
              filters.map((subcategory, index) => {
                if (index > 1) return;
                return (
                  <SubCategorie key={`${index}-${subcategory}`}>
                    {subcategory}
                  </SubCategorie>
                );
              });
              return <Categorie key={`${index}-${key}`}>{key}</Categorie>;
            },
          )}
        </WrapperCategories>
      </WrapperHomeDocPreview>
    </MainWrapperHomeDoc>
  );
}

const WrapperCategories = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Categorie = styled.span`
  font-size: 10px;
  border-radius: 3px;
  background-color: #3dd2cc;
  color: white;
  padding: 3px;
  tex-align: center;
  margin-left: 5px;
`;

const SubCategorie = styled.span`
  font-size: 10px;
  border-radius: 3px;
  background-color: #66dcd7;
  color: white;
  padding: 3px;
  tex-align: center;
`;

const MainWrapperHomeDoc = styled.div`
  position: relative;
  a {
    opacity: 0;
    transition: all 500ms ease-in-out;
  }
  &:hover {
    a {
      opacity: 1;
    }
    div {
      filter: blur(2px);
      box-shadow: none;
    }
  }
`;

const WrapperHomeDocPreview = styled.div`
  width: 300px;
  height: 420px;
  border-radius: 9px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 18px;
  -webkit-box-shadow: 15px 15px 27px #e1e1e3, -15px -15px 27px #ffffff;
  box-shadow: 15px 15px 27px #e1e1e3, -15px -15px 27px #ffffff;
  padding: 10px;
  margin: 20px;
  transition: all 300ms ease-in-out;
  overflow: hidden;
`;

const WrapperDocImage = styled.div`
  position: relative;
  width: 330px;
  height: 190px;
  overflow: hidden;
  transform: translateX(-15px) translateY(-15px);
`;

const DocImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
`;

const DocTitle = styled.div`
  * {
    font-size: 18px;
    color: #3c4c56;
    font-weight: bold;
    word-break: break-word;
  }
`;

const DocDescription = styled.div`
  * {
    font-size: 18px;
    color: #3c4c56;
    word-break: break-word;
  }
`;

const DocGranule = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: #3c4c56;
  word-break: break-word;
`;

const LinkButton = styled.a`
  position: absolute;
  width: 80px;
  background-color: #3dd2cc;
  color: white;
  padding: 10px 15px;
  display: flex;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  cursor: pointer;
  z-index: 2;
  text-decoration: none;
  border-radius: 3px;
`;
