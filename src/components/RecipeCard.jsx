import React from "react";
import Image from "next/image";
import Link from "next/link";
import ArrowNarrowRightIcon from "@icons/ArrowNarrowRightIcon";

export default function RecipeCard({ recipe }) {
  return (
    <div className="max-w-sm mx-auto sm:mx-0 bg-gray-100 dark:bg-gray-700 rounded-md shadow-lg overflow-hidden">
      <div className="">
        <Image
          src={recipe.data.image}
          width="400"
          height="170"
          placeholder="blur"
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-2xl line-clamp-2 font-semibold text-gray-800 dark:text-white mb-3 leading-tight">
          {recipe.data.name}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
          {recipe.data.excerpt}
        </p>
        <Link href={recipe.path}>
          <a className="inline-flex items-center justify-between text-white text-sm px-3 py-1 bg-purple-500 hover:bg-purple-400 dark:hover:bg-purple-400  rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-700 focus:ring-purple-500">
            Read More
            <span className="ml-1">
              <ArrowNarrowRightIcon />
            </span>
          </a>
        </Link>
      </div>
    </div>
  );
}
