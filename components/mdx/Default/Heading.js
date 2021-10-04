import React from "react";
import styled from "styled-components";

const H1 = ({ children }) => {
  return <StyledH1>{children}</StyledH1>;
};
const H2 = () => {
  return <div></div>;
};

const StyledH1 = styled.h1`
  color: red;
  margin: 8px 0px 16px;
  font-weight: var(--fw-normal);
`;

export { H1, H2 };
