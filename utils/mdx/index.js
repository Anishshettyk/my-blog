import fs from "fs";
import path from "path";
import { renderToString } from "next-mdx-remote";

//get's path to specific folder
export const filePaths = (dataFolder = "Data", subFolder) => {
  if (subFolder) {
    return path.join(process.cwd(), dataFolder, subFolder);
  }
};

//get's all the files present in filePaths.

export const getAllFiles = (dataFolder, subFolder) =>
  fs
    .readdirSync(filePaths(dataFolder, subFolder))
    .filter((path) => /\.mdx?$/.test(path));

export const getFileBySlug = async (type, slug) => {
  const source = fs.readFileSync(
    path.join(process.cwd(), type, `${slug}.mdx`),
    "utf-8"
  );
  const { data, content } = matter(source);
  const mdxSource = await renderToString(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
  });
  return {
    mdxSource,
    frontMatter: {
      ...data,
    },
  };
};
