import React from "react";
import Link from "next/link";
import Head from "next/head";
import AppLayout from "@modules/layouts/AppLayout";
import { cuisines } from "@fixtures/cuisines";
import * as ROUTES from "@constants/routes";

export default function CuisinesPage() {
  return (
    <>
      <Head>
        <title>Cuisines | Recipe Venture</title>
        <meta
          name="description"
          content="Find the best recipes for you."
        ></meta>
        <meta property="og:title" content="Cuisines | Recipe Venture"></meta>
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
          content="http://recipe-venture.com/cuisines"
        ></meta>
        <meta name="twitter:title" content="Cuisines | Recipe Venture"></meta>
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
        <meta name="twitter:image:alt" content="Cuisines"></meta>
      </Head>
      <AppLayout>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <div className="bg-purple-600 w-24 h-1 rounded mb-3"></div>
              <h1 className="text-4xl text-gray-900 dark:text-white font-semibold">
                Cuisines
              </h1>
            </div>
            <ul className="">
              {cuisines.map((cuisine, index) => (
                <li
                  key={index}
                  className="inline-block"
                  style={{ margin: ".35em" }}
                >
                  <Link
                    href={{
                      pathname: ROUTES.CUISINE,
                      query: { slug: cuisine.slug },
                    }}
                  >
                    <a
                      className="inline-block text-base px-3 py-1 bg-gray-200 text-gray-800 dark:text-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 rounded"
                      title={cuisine.name}
                    >
                      {cuisine.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </AppLayout>
    </>
  );
}
