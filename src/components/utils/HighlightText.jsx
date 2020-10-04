import React from "react";
import styled from "@emotion/styled";

export default function HighlightText(toFormat, matches) {
  const toFormat2 = toFormat.replaceAll("<em>", "<mark>");
  const toFormat3 = toFormat2.replaceAll("</em>", "</mark>");

  return (
    <>
      <span dangerouslySetInnerHTML={{ __html: toFormat3 }} />
    </>
  );
}
