import React from "react";
import styled from "styled-components";

import { connectMe } from "../utils";

const Footer = () => {
  return (
    <StyledFooter>
      <LogoContainer>
        <h1>Anish shetty k</h1>
        <p>Happy for reading :)</p>
      </LogoContainer>
      <StyledFollowMe>
        <p>Connect with me @</p>
        <ul className='container'>
          {connectMe.map((social) => (
            <li key={social.id}>
              <a
                href={social.link}
                target='_blank'
                rel='noopener noreferrer'
                style={{ color: social.color }}
              >
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
      </StyledFollowMe>
      <StyledCopyright>
        <p> &copy; {new Date().getFullYear()} all rights reserved.</p>
      </StyledCopyright>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.backDim};
  padding: 32px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const LogoContainer = styled.div`
  h1 {
    font-weight: var(--fw-bold);
    color: ${(props) => props.theme.mainHeading};
    font-size: var(--fs-xxl);
    cursor: pointer;
  }
  p {
    margin-top: 4px;
    text-align: center;
    color: ${(props) => props.theme.mainText};
    font-weight: var(--fw-bold);
    font-size: var(--fs-sm);
    font-style: italic;
  }
`;

const StyledFollowMe = styled.div`
  margin-top: 20px;
  p {
    font-size: var(--fs-sm);
    opacity: 0.8;
    position: relative;
    text-align: center;
    &:before,
    &:after {
      position: absolute;
      content: "";
      width: 40%;
      height: 2px;
      background-color: ${(props) => props.theme.mainText};
      top: 50%;
      transform: translate(-50% -50%);
    }
    &:before {
      left: -50%;
    }
    &:after {
      right: -50%;
    }
  }
  .container {
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    li {
      margin: 0px 10px;
      transition: all 0.3s ease-in-out;
      a {
        svg {
          font-size: var(--fs-xl);
        }
      }
      &:hover {
        transform: translateY(-5px) scale(1.1);
        opacity: 0.8;
      }
    }
  }
`;
const StyledCopyright = styled.div`
  margin-top: 30px;
  p {
    font-size: var(--fs-sm);
    opacity: 0.6;
  }
`;
