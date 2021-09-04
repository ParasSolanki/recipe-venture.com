import React, { useEffect, useState } from "react";
import { promises as fs } from "fs";
import path from "path";
import grayMatter from "gray-matter";
import CuisinesSlugRecipesPage from "@modules/cuisines/CuisinesSlugRecipesPage";

export default function CuisineSlugRecipes({ slug, recipes }) {
  const [loading, setLoading] = useState(true);
  const [cuisine, setCuisine] = useState("");

  // uppercase first letter
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    if (slug) {
      setCuisine(capitalizeFirstLetter(slug.replaceAll("-", " ")));
      setLoading(false);
    }
  }, [slug]);

  return (
    !loading && <CuisinesSlugRecipesPage cuisine={cuisine} recipes={recipes} />
  );
}

export const getStaticProps = async ({ params }) => {
  const slug = params.slug;
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

  const recipes = files.reduce((temp, file) => {
    if (file.matter.data.cuisineSlug === slug && temp.length < 150) {
      temp.push({
        path: `/recipe/${file.filename.replace(".mdx", "")}`,
        data: file.matter.data,
      });
    }
    return temp;
  }, []);

  // if recipes length is zero that means cuisine not found.
  // redirect to 404 page.
  if (recipes.length === 0) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      recipes,
      slug,
    },
  };
};

export const getStaticPaths = () => {
  return {
    paths: [
      { params: { slug: "gujarati-recipes" } },
      { params: { slug: "south-indian-recipes" } },
      { params: { slug: "bengali-recipes" } },
      { params: { slug: "chinese" } },
      { params: { slug: "indian" } },
    ],
    fallback: true,
  };
};
