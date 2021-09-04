import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as ROUTES from "@constants/routes";

export default function RecipeArticle({ body, frontMatter }) {
  const { name, slug, cuisine, image, prepTime, cuisineSlug } = frontMatter;
  return (
    <article>
      <h2 className="text-3xl sm:text-4xl text-gray-800 dark:text-white font-bold mb-6">
        {name}
      </h2>
      <div className="flex flex-start mb-4">
        <Link href={{ pathname: ROUTES.CUISINE, query: { slug: cuisineSlug } }}>
          <a
            className="inline-block text-sm px-2 py-1 bg-gray-200 text-purple-600 dark:text-gray-200 dark:bg-purple-500 hover:bg-gray-300 dark:hover:bg-purple-400 rounded"
            title={cuisine}
          >
            <span>#</span>
            {cuisine}
          </a>
        </Link>
      </div>
      <div className="mb-6 w-full">
        <Image
          className="object-cover"
          src={image}
          alt={slug}
          width="1000"
          height="700"
          placeholder="blur"
        />
      </div>
      <div className="mb-4">
        <p className="text-2xl text-gray-500 dark:text-gray-300 mb-4">
          <span className="font-semibold text-gray-700 dark:text-gray-200">
            Cuisine:{" "}
          </span>
          {cuisine}
        </p>
        <p className="text-2xl text-gray-500 dark:text-gray-300 mb-4">
          <span className="font-semibold text-gray-700 dark:text-gray-200">
            Preparation Time:{" "}
          </span>
          <time>{prepTime} mins</time>
        </p>
      </div>
      <div className="recipe-body">{body}</div>
    </article>
  );
}
