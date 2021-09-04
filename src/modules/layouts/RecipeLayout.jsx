import React from "react";
import Head from "next/head";
import AppLayout from "./AppLayout";
import RecipeArticle from "@components/RecipeArticle";
import SocialLinks from "@components/SocialLinks";

export default function RecipeLayout({ children, frontMatter }) {
  const { name, image, excerpt, slug } = frontMatter;
  return (
    <>
      <Head>
        <title>Recipe | Recipe Venture</title>
        <meta property="og:title" content={name}></meta>
        <meta property="og:description" content={excerpt}></meta>
        <meta property="og:image" content={image}></meta>
        <meta
          property="og:url"
          content={`http://recipe-venture.com/recipes/${slug}`}
        ></meta>
        <meta name="twitter:title" content={name}></meta>
        <meta name="twitter:description" content={excerpt}></meta>
        <meta name="twitter:image" content={image}></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta property="og:site_name" content="Recipe Venture"></meta>
        <meta name="twitter:image:alt" content="Recipe Venture"></meta>
      </Head>
      <AppLayout>
        <section className="py-20">
          <SocialLinks frontMatter={frontMatter} />
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <RecipeArticle body={children} frontMatter={frontMatter} />
            </div>
          </div>
        </section>
      </AppLayout>
    </>
  );
}
