import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { MDXProvider } from "@mdx-js/react";

import { Navbar, Footer } from "../components";
import { H1, H2 } from "../components/mdx/Default/Heading";

const components = {
  h1: H1,
  h2: H2,
};

const Main = ({ children, toggleTheme, theme }) => {
  return (
    <StyledMain>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <MDXProvider components={components}>{children}</MDXProvider>
      <Footer />
    </StyledMain>
  );
};

Main.propTypes = {
  children: PropTypes.element.isRequired,
  toggleTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};

export default Main;

const StyledMain = styled.main`
  position: relative;
`;
