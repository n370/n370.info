import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export function getBlogPosts() {
  const postsDirectoryPath = path.join(
    process.cwd(),
    "src",
    "app",
    "blog",
    "posts",
  );

  const postYearDirectories = fs
    .readdirSync(postsDirectoryPath, { withFileTypes: true })
    .filter((entry) => entry.isDirectory());

  const posts = [];

  for (const directory of postYearDirectories) {
    const postYearDirectoryPath = path.join(postsDirectoryPath, directory.name);
    const postYearDirectoryFiles = fs.readdirSync(postYearDirectoryPath);
    for (const fileName of postYearDirectoryFiles) {
      const file = fs.readFileSync(path.join(postYearDirectoryPath, fileName));
      const { data: metadata, content } = matter(file);
      const slug = path.basename(fileName, path.extname(fileName));
      const yearOfPublication = directory.name;
      posts.push({
        fileName,
        path: `${yearOfPublication}/${slug}`,
        metadata,
        content,
        yearOfPublication,
        slug,
      });
    }
  }

  return posts;
}
