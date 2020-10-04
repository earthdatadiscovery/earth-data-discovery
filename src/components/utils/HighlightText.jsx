import React from "react";
import styled from "@emotion/styled";

export default function HighlightText(toFormat, matches) {
  const toFormat2 = toFormat.replace("<em>", "<mark>");
  const toFormat3 = toFormat2.replace("</em>", "</mark>");

  return (
    <>
      <span dangerouslySetInnerHTML={{ __html: toFormat3 }} />
    </>
  );
}
