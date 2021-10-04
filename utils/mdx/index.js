import fs from "fs";
import path from "path";

//get's path to specific folder
export const filePaths = (dataFolder = "data", subFolder) => {
  if (subFolder) {
    return path.join(process.cwd(), dataFolder, subFolder);
  }
};

//get's all the files present in filePaths.

export const getAllFiles = (dataFolder, subFolder) =>
  fs
    .readdirSync(filePaths(dataFolder, subFolder))
    .filter((path) => /\.mdx?$/.test(path));
