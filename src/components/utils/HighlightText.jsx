import React from "react";
import styled from "@emotion/styled";

export default function HighlightText(toFormat) {
  // const searchRegExp = /<em>/;
  // const searchRegExp2 = /<\/em>/;

  const hilightedTmp = toFormat.split("<em>").join("<mark>");
  const highlighted = hilightedTmp.split("</em>").join("</mark>");

  // const toFormat2 = toFormat.replaceAll("<em>", "<mark>");
  // const toFormat3 = toFormat2.replaceAll("</em>", "</mark>");

  // const toFormat2 = toFormat.replace(searchRegExp, "<mark>");
  // const toFormat3 = toFormat2.replace(searchRegExp2, "</mark>");

  return (
    <>
      <span dangerouslySetInnerHTML={{ __html: highlighted }} />
    </>
  );
}
