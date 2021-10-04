import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { Navbar, Footer } from "../components";

const Main = ({ children, toggleTheme, theme }) => {
  return (
    <StyledMain>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      {children}
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
