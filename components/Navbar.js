import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useDispatch } from "react-redux";

import { FiSun, FiBookmark, FiMoon } from "react-icons/fi";

import { navLinks } from "../utils";

const Navbar = ({ toggleTheme, theme }) => {
  return (
    <StyledNav>
      <LogoContainer>
        <Link href='/' passHref>
          <h1>Anish Shetty k</h1>
        </Link>
      </LogoContainer>
      <NavLinks>
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link href={link.link}>{link.title}</Link>
          </li>
        ))}
      </NavLinks>
      <NavActions>
        <button
          title='activate dark mode'
          aria-label='activate dark mode'
          onClick={toggleTheme}
        >
          {theme === "dark" ? <FiSun /> : <FiMoon />}
        </button>
        <button title='bookmarked posts' aria-label='bookmarked posts'>
          <FiBookmark />
        </button>
      </NavActions>
    </StyledNav>
  );
};

export default Navbar;

const StyledNav = styled.nav`
  background-color: transparent;
  overflow: hidden;
  width: 100%;
  padding: 15px 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  h1 {
    font-weight: var(--fw-bold);
    color: ${(props) => props.theme.mainHeading};
    font-size: var(--fs-xxl);
    letter-spacing: 0.7px;
    cursor: pointer;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  li {
    margin-right: 50px;
    a {
      color: ${(props) => props.theme.mainText};
      font-weight: var(--fw-bold);
    }
  }
`;

const NavActions = styled.div`
  button {
    margin: 0px 10px;
    border: none;
    background-color: transparent;
    svg {
      color: ${(props) => props.theme.mainHeading};
      font-size: 1.5rem;
      color: ${(props) => props.theme.mainText};
    }
  }
`;
