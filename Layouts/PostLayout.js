import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Breadcrumbs } from "../components";
import { media } from "../styles";

const PostLayout = ({ children, frontMatter }) => {
  const crumbs = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Posts",
      link: "/posts",
    },
    {
      name: frontMatter.category,
      link: `/posts/${frontMatter.category}`,
    },
  ];
  return (
    <StyledPostLayout>
      <PostTitleContainer>
        <Breadcrumbs crumbs={crumbs} />
        <h1>{frontMatter.title}</h1>
        <p>{frontMatter.subTitle}</p>
        <p className='post__info'>{frontMatter.readingTime.text}</p>
      </PostTitleContainer>
      {children}
    </StyledPostLayout>
  );
};
//breadcrumbs

PostLayout.prototype = {
  children: PropTypes.element.isRequired,
  frontMatter: PropTypes.object.isRequired,
};

export default PostLayout;

const StyledPostLayout = styled.main``;

const PostTitleContainer = styled.section`
  background-color: ${(props) => props.theme.backDim};
  min-height: 50vh;
  width: 100%;
  padding: 50px 180px 50px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  &:after {
    position: absolute;
    content: "";
    height: 10px;
    bottom: 0;
    left: 0;
    right: 0;

    background: linear-gradient(
      to top,
      ${(props) => props.theme.mainBack} 2%,
      ${(props) => props.theme.backDim}
    );
  }
  h1 {
    margin-top: 20px;
    font-size: clamp(2rem, 6vw, 3rem);
    font-weight: 900;
    color: ${(props) => props.theme.mainText};
  }
  p {
    font-size: clamp(1rem, 1.5vw, 2rem);
    margin-top: 10px;
    font-weight: var(--fw-normal);
    opacity: 0.6;
    font-style: italic;
  }
  .post__info {
    font-size: var(--fs-md);
    margin-top: 25px;
    font-style: normal;
    opacity: 1;
    font-weight: var(--fw-bold);
    color: ${(props) => props.theme.mainHeading};
    text-transform: uppercase;
  }
  ${media.giant`
  padding: 50px 140px 50px;
  `}
  ${media.netbook`
  padding: 50px 100px 50px;
  `}
  ${media.tabletL`
  padding: 50px 80px 50px;
  `}
  ${media.tphone`
  padding: 50px 60px 50px;
  `}
  ${media.phablet`
  padding:50px 40px 50px;
  `}
`;
