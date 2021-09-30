import React from "react";
import styled from "styled-components";

import { Navbar } from "../components";

const Main = ({ children, toggleTheme, theme }) => {
  return (
    <StyledMain className='dark'>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      {children}
    </StyledMain>
  );
};

export default Main;

const StyledMain = styled.main``;
