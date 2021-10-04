import React from "react";
import matter from "gray-matter";
import fs from "fs";
import path from "path";

import { getAllFiles, filePaths } from "../../utils";
import { Seo } from "../../components";

const Posts = ({ posts }) => {
  console.log(posts);
  return (
    <div>
      <Seo title='All post' description='this is post description' />
      all posts
    </div>
  );
};

export default Posts;

export function getStaticProps() {
  const posts = getAllFiles("Data", "posts").map((filePath) => {
    const fileSource = fs.readFileSync(
      path.join(filePaths("Data", "posts"), filePath)
    );
    const { data, content } = matter(fileSource);

    return {
      data,
      content,
      filePath,
    };
  });
  return {
    props: { posts },
  };
}
