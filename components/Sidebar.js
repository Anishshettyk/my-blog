import React, { useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { media } from "../styles";
import { useOnClickOutside } from "../Hooks";

const Sidebar = ({ sidebarToggle, children, setSidebarToggle }) => {
  const sidebarRef = useRef();

  useOnClickOutside(sidebarRef, () => setSidebarToggle(false));

  return (
    <StyledSidebar ref={sidebarRef}>
      <SidebarToggleButton
        className={sidebarToggle ? "active" : ""}
        onClick={() => setSidebarToggle(!sidebarToggle)}
      >
        <span></span>
      </SidebarToggleButton>
      <SidebarContainer className={sidebarToggle ? "active" : ""}>
        {children}
      </SidebarContainer>
    </StyledSidebar>
  );
};

Sidebar.propTypes = {
  sidebarToggle: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  setSidebarToggle: PropTypes.func.isRequired,
};

export default Sidebar;

const StyledSidebar = styled.aside`
  display: none;
  ${media.tabletL`
  display:block;
  `}
`;

const SidebarToggleButton = styled.div`
  display: none;
  padding: 5px;
  cursor: pointer;
  position: relative;
  float: left;
  z-index: 100;
  &:before,
  &:after,
  span,
  span:before,
  span:after {
    transition: all 0.2s ease-in-out;
  }
  span {
    width: 30px;
    height: 2px;
    margin: 10px 0;
    position: relative;
    display: block;
    background-color: ${(props) => props.theme.mainText};
    border-radius: 2px;
    &:before,
    &:after {
      background-color: ${(props) => props.theme.mainText};
      content: "";
      display: block;
      height: 2px;
      width: 30px;
      position: absolute;
      top: -8px;
      left: 0;
      border-radius: 2px;
      transform: rotate(0deg);
      transform-origin: 13%;
    }
    &:after {
      top: 8px;
    }
  }
  &.active span {
    background-color: transparent;
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
  }

  ${media.tabletL`
  display:block;
  `}
`;

const SidebarContainer = styled.div`
  transition: all 0.5s ease;
  position: fixed;
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: 0;
  right: -400px;
  bottom: 0;
  height: 100vh;
  width: 400px;
  background-color: ${(props) => props.theme.mainBack};
  padding-top: 62px;
  &.active {
    right: 0;
  }
  ${media.tabletL`
  display:flex;
  `}
`;
