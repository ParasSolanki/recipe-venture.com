import { promises as fs } from "fs";
import path from "path";
import grayMatter from "gray-matter";
import HomePage from "@modules/HomePage";

export default function Home({ recipes }) {
  return <HomePage recipes={recipes} />;
}

export async function getStaticProps() {
  const recipesDir = path.join(process.cwd(), "src/pages/recipe");
  const fileNames = await fs.readdir(recipesDir);

  const files = await Promise.all(
    fileNames.map(async (filename) => {
      const filePath = path.join(recipesDir, filename);
      const content = await fs.readFile(filePath, "utf8");
      const matter = grayMatter(content);
      return {
        filename,
        matter,
      };
    })
  );
  const recipes = files
    .map((file) => {
      if (file.matter.data.image !== undefined)
        return {
          path: `/recipe/${file.filename.replace(".mdx", "")}`,
          data: file.matter.data,
        };
    })
    .splice(Math.floor(Math.random() * 1000), 8);

  return {
    props: {
      recipes,
    },
  };
}
