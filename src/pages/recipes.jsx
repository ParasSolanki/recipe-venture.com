import React from "react";
import { promises as fs } from "fs";
import path from "path";
import grayMatter from "gray-matter";
import RecipesPage from "@modules/RecipesPage";

export default function Recipes({ recipes }) {
  return <RecipesPage recipes={recipes} />;
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
  const random = Math.floor(Math.random() * 450);
  const smallRandom = Math.floor(Math.random() * 280);
  const lessThanThirty = files
    .reduce((temp, file) => {
      if (
        parseInt(file.matter.data.prepTime) !== undefined &&
        parseInt(file.matter.data.prepTime) < 30 &&
        temp.length < 500
      ) {
        temp.push({
          path: `/recipe/${file.filename.replace(".mdx", "")}`,
          data: file.matter.data,
        });
      }
      return temp;
    }, [])
    .splice(random, 15);
  const lessThanSixty = files
    .reduce((temp, file) => {
      if (
        parseInt(file.matter.data.prepTime) !== undefined &&
        parseInt(file.matter.data.prepTime) > 30 &&
        parseInt(file.matter.data.prepTime) < 60 &&
        temp.length < 500
      ) {
        temp.push({
          path: `/recipe/${file.filename.replace(".mdx", "")}`,
          data: file.matter.data,
        });
      }
      return temp;
    }, [])
    .splice(random, 15);
  const lessThanOneTwenty = files
    .reduce((temp, file) => {
      if (
        parseInt(file.matter.data.prepTime) !== undefined &&
        parseInt(file.matter.data.prepTime) > 60 &&
        parseInt(file.matter.data.prepTime) < 120 &&
        temp.length < 500
      ) {
        temp.push({
          path: `/recipe/${file.filename.replace(".mdx", "")}`,
          data: file.matter.data,
        });
      }
      return temp;
    }, [])
    .splice(random, 15);

  const lessThanFourHundred = files
    .reduce((temp, file) => {
      if (
        parseInt(file.matter.data.prepTime) !== undefined &&
        parseInt(file.matter.data.prepTime) > 120 &&
        parseInt(file.matter.data.prepTime) < 240 &&
        temp.length < 300
      ) {
        temp.push({
          path: `/recipe/${file.filename.replace(".mdx", "")}`,
          data: file.matter.data,
        });
      }
      return temp;
    }, [])
    .splice(smallRandom, 15);

  const remainingRecipes = files.reduce((temp, file) => {
    if (
      parseInt(file.matter.data.prepTime) !== undefined &&
      parseInt(file.matter.data.prepTime) > 240 &&
      parseInt(file.matter.data.prepTime) < 500 &&
      temp.length < 15
    ) {
      temp.push({
        path: `/recipe/${file.filename.replace(".mdx", "")}`,
        data: file.matter.data,
      });
    }
    return temp;
  }, []);

  return {
    props: {
      recipes: [
        {
          title: "Recipes Under 30 Minutes",
          data: JSON.parse(JSON.stringify(lessThanThirty)),
        },
        {
          title: "Recipes Under 1 Hour",
          data: JSON.parse(JSON.stringify(lessThanSixty)),
        },
        {
          title: "Recipes Under 2 Hours",
          data: JSON.parse(JSON.stringify(lessThanOneTwenty)),
        },
        {
          title: "Recipes Under 4 Hours",
          data: JSON.parse(JSON.stringify(lessThanFourHundred)),
        },
        {
          title: "Time tacking recipes",
          data: JSON.parse(JSON.stringify(remainingRecipes)),
        },
      ],
    },
  };
}
