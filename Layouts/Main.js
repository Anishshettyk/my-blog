import React from "react";
import styled from "styled-components";

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

export default Main;

const StyledMain = styled.main``;
