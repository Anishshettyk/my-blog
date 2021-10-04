import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "next/link";

import { FaAngleRight } from "react-icons/fa";

const Breadcrumbs = ({ crumbs }) => {
  return (
    <StyledBreadcrumbs>
      {crumbs.map(({ name, link }, index) => (
        <div key={index}>
          <Link href={link} alt={name}>
            {name}
          </Link>
          <FaAngleRight />
        </div>
      ))}
    </StyledBreadcrumbs>
  );
};
Breadcrumbs.propTypes = {
  crumbs: PropTypes.array.isRequired,
};

const StyledBreadcrumbs = styled.div`
  display: flex;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    a {
      color: ${(props) => props.theme.mainText};
      border-bottom: 1px solid transparent;
      transition: all 0.2s ease-in-out;
      opacity: 0.6;
      &:hover {
        opacity: 1;
        border-bottom: 1px solid ${(props) => props.theme.mainText};
      }
    }
    svg {
      margin: 0px 10px;
      color: ${(props) => props.theme.text200};
    }
    &:last-child {
      svg {
        display: none;
      }
    }
  }
`;

export default Breadcrumbs;
