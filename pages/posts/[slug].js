import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import { getAllFiles, filePaths } from "../../utils";
import { Test } from "../../components";

const components = { Test };

const Post = ({ source }) => {
  return <MDXRemote {...source} components={components} />;
};

export default Post;

export const getStaticProps = async ({ params }) => {
  const filePath = path.join(filePaths("data", "posts"), `${params.slug}.mdx`);
  const fileSource = fs.readFileSync(filePath, "utf8");

  const { content, data } = matter(fileSource);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = () => {
  const paths = getAllFiles("data", "posts")
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
