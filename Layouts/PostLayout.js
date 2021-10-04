import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Breadcrumbs } from "../components";

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
        <h1>Designing Beautiful Shadows in CSS</h1>
        <p>
          In my humble opinion, the best websites and web applications have a
          tangible “real” quality to them.{" "}
        </p>
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
  padding: 50px 180px 50px;
  position: relative;
  &:after {
    position: absolute;
    content: "";
    height: 10vh;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(
      to top,
      ${(props) => props.theme.mainBack} 90%,
      ${(props) => props.theme.backDim}
    );
  }
  h1 {
    margin-top: 20px;
    font-size: 50px;
    font-weight: 900;
    color: ${(props) => props.theme.mainText};
  }
  p {
    font-size: var(--fs-xl);
    margin-top: 10px;
    font-weight: var(--fw-normal);
    opacity: 0.6;
    font-style: italic;
  }
`;
