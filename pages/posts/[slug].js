import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import PropTypes from "prop-types";
import readingTime from "reading-time";

import { getAllFiles, filePaths, getFileBySlug } from "../../utils";
import { Test } from "../../components";
import { PostLayout } from "../../Layouts";

const components = { Test };

const Post = ({ source, frontMatter }) => {
  console.log(frontMatter);
  return (
    <PostLayout frontMatter={frontMatter}>
      <MDXRemote {...source} components={components} />
    </PostLayout>
  );
};
Post.prototype = {
  source: PropTypes.node.isRequired,
  frontMatter: PropTypes.object.isRequired,
};

export default Post;

export const getStaticProps = async ({ params }) => {
  const filePath = path.join(filePaths("Data", "posts"), `${params.slug}.mdx`);
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
      frontMatter: {
        slug: params.slug || null,
        readingTime: readingTime(content),
        ...data,
      },
    },
  };
};

export const getStaticPaths = () => {
  const paths = getAllFiles("Data", "posts")
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
