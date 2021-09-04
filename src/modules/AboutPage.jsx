import React from "react";
import Head from "next/head";
import AppLayout from "@modules/layouts/AppLayout";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | Recipe Venture</title>
        <meta
          name="description"
          content="Find the best recipes for you."
        ></meta>
        <meta property="og:title" content="About Us | Recipe Venture"></meta>
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
          content="http://recipe-venture.com/about"
        ></meta>
        <meta name="twitter:title" content="About Us | Recipe Venture"></meta>
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
        <meta name="twitter:image:alt" content="About Us"></meta>
      </Head>
      <AppLayout>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <div className="bg-purple-600 w-36 h-1 rounded mb-3"></div>
              <h1 className="text-4xl text-gray-900 dark:text-white font-semibold">
                About Us
              </h1>
            </div>
            <div className="text-base sm:text-lg">
              <h2 className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-200 font-medium mb-4">
                Welcome To Recipe Venture!
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Your number one source for all types of recipes. We're dedicated
                to giving you the varity of best categories. Here we will
                provide you only interesting stuff, which you will like very
                much.
              </p>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Our menu offers a mixture of traditional and modern dishes,
                ranging from a succulent steak to a classic ‘Mexican’. Find an
                exciting classic dishes with innovative twists which are crafted
                using locally sourced ingredients to create the perfect mix
                between local flavours. Our personalized discovery system helps
                you to serve you better, so the question "what's for the
                lunch/dinner today?" can be solved without a second delayed.
              </p>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                We help people discover what to eat based on personal
                preferences and data and dedicated to providing you the best of
                recipes, with a focus on dependability and Recipe. We hope you
                enjoy our recipes as much as we enjoy offering them to you for
                free.
              </p>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                We will keep posting more important posts on our Website for all
                of you. Please give your support and love.
              </p>{" "}
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Thanks for visiting our Site!
              </p>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Download our app today! or Follow us on Instagram
              </p>
            </div>
          </div>
        </section>
      </AppLayout>
    </>
  );
}
