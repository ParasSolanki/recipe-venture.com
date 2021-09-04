import React from "react";
import Head from "next/head";
import AppLayout from "@modules/layouts/AppLayout";
import RecipeCard from "@components/RecipeCard";

export default function CuisinesSlugRecipesPage({ cuisine, recipes }) {
  //
  return (
    <>
      <Head>
        <title>{`${cuisine} | Recipe Venture`}</title>
        <meta
          name="description"
          content="Find the best recipes for you."
        ></meta>
        <meta
          property="og:title"
          content={`${cuisine} | Recipe Venture`}
        ></meta>
        <meta
          property="og:description"
          content="We offers a mixture of traditional and modern recipes, ranging
                  from a succulent steak to a classic ‘Mexican’."
        ></meta>
        <meta
          property="og:image"
          content="http://recipe-venture.com/images/logo-img.jpg"
        ></meta>
        <meta
          property="og:url"
          content={`http://recipe-venture.com/cuisines/${cuisine}/recipes`}
        ></meta>
        <meta
          name="twitter:title"
          content={`${cuisine} | Recipe Venture`}
        ></meta>
        <meta
          name="twitter:description"
          content="We offers a mixture of traditional and modern recipes, ranging
                  from a succulent steak to a classic ‘Mexican’."
        ></meta>
        <meta
          name="twitter:image"
          content="http://recipe-venture.com/images/logo-img.jpg"
        ></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta property="og:site_name" content="Recipe Venture"></meta>
        <meta name="twitter:image:alt" content={cuisine}></meta>
      </Head>
      <AppLayout>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <div className="bg-purple-600 w-36 h-1 rounded mb-3"></div>
              <h1 className="text-4xl text-gray-900 dark:text-white font-semibold">
                {cuisine} recipes
              </h1>
            </div>
            <div className="grid gap-x-4 gap-y-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
              {recipes.map((recipe, index) => (
                <RecipeCard key={index} recipe={recipe} />
              ))}
            </div>
          </div>
        </section>
      </AppLayout>
    </>
  );
}
