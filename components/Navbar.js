import React, { useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import PropTypes from "prop-types";

import { FiSun, FiBookmark, FiMoon } from "react-icons/fi";

import { navLinks } from "../utils";
import { media } from "../styles";
import { Sidebar } from "./index";

const Navbar = ({ toggleTheme, theme }) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);

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
          title={theme === "dark" ? "active light mode" : "activate dark mode"}
          aria-label={
            theme === "dark" ? "active light mode" : "activate dark mode"
          }
          onClick={toggleTheme}
        >
          {theme === "dark" ? (
            <FiSun className='sun__icon' />
          ) : (
            <FiMoon className='moon__icon' />
          )}
        </button>
        <button title='bookmarked posts' aria-label='bookmarked posts'>
          <Link href='/bookmarked' passHref>
            <a>
              <FiBookmark />
            </a>
          </Link>
        </button>
      </NavActions>

      <Sidebar
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      >
        <ul>
          {navLinks.map((link) => (
            <SidebarLink key={link.id} onClick={() => setSidebarToggle(false)}>
              <Link href={link.link}>{link.title}</Link>
            </SidebarLink>
          ))}
        </ul>
        <SidebarActions>
          <button
            title={
              theme === "dark" ? "active light mode" : "activate dark mode"
            }
            aria-label={
              theme === "dark" ? "active light mode" : "activate dark mode"
            }
            onClick={toggleTheme}
          >
            {theme === "dark" ? (
              <FiSun className='sun__icon' />
            ) : (
              <FiMoon className='moon__icon' />
            )}
          </button>
          <button title='bookmarked posts' aria-label='bookmarked posts'>
            <Link href='/bookmarked' passHref>
              <a>
                <FiBookmark />
              </a>
            </Link>
          </button>
        </SidebarActions>
      </Sidebar>
    </StyledNav>
  );
};

Navbar.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};

export default Navbar;

const StyledNav = styled.nav`
  background-color: ${(props) => props.theme.mainBack};
  overflow: hidden;
  width: 100%;
  padding: 15px 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  ${media.desktop`
  padding:15px 100px;
  `}
  ${media.netbook`
  padding: 15px 70px;
  `}
  ${media.tphone`
  padding: 15px 30px;
  `}
`;

const LogoContainer = styled.div`
  h1 {
    font-weight: var(--fw-bold);
    color: ${(props) => props.theme.mainHeading};
    font-size: var(--fs-xl);
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
      transition: all 0.2s ease-in-out;
      &:hover {
        opacity: 0.8;
      }
    }
  }
  ${media.tabletL`
  display:none;
  `}
`;

const rotateSun = keyframes`
from{
  transform: rotate(0deg);
}
to{
  transform: rotate(360deg);
}
`;

const rotateMoon = keyframes`
0%{
  transform: rotate(0deg) scale(1.05);
}
50%{
  transform: rotate(30deg);
}
100%{
  transform: rotate(0deg) scale(1.05);
}

`;

const NavActions = styled.div`
  button {
    margin: 0px 17px;
    border: none;
    background-color: transparent;
    color: ${(props) => props.theme.mainText};
    .sun__icon {
      color: var(--orange);
      animation: ${rotateSun} 5s linear infinite;
    }
    .moon__icon {
      color: var(--coldBlue);
      animation: ${rotateMoon} 1.5s linear infinite;
    }
    svg {
      font-size: var(--fs-xxl);
      &:hover {
        animation-play-state: paused;
        opacity: 0.8;
      }
    }
  }
  ${media.tabletL`
  display:none;
  `}
`;

const SidebarLink = styled.li`
  margin-bottom: 40px;
  font-size: var(--fs-heavy);
  text-align: center;
  font-weight: var(--fw-bold);

  a {
    color: ${(props) => props.theme.mainText};
    &:hover {
      opacity: 0.8;
      color: ${(props) => props.theme.mainHeading};
    }
  }
`;
const SidebarActions = styled.div`
  button {
    padding: 10px;
    border-radius: var(--br-sm);
    background-color: ${(props) => props.theme.secondary};
    margin: 0px 17px;
    border: none;
    color: ${(props) => props.theme.mainText};
    .sun__icon {
      color: var(--orange);
      animation: ${rotateSun} 5s linear infinite;
    }
    .moon__icon {
      color: var(--coldBlue);
      animation: ${rotateMoon} 1.5s linear infinite;
    }
    svg {
      font-size: var(--fs-xxl);
      &:hover {
        animation-play-state: paused;
        opacity: 0.8;
      }
    }
  }
`;
