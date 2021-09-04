import React from "react";
import Head from "next/head";
import Link from "next/link";
import AppLayout from "@modules/layouts/AppLayout";
import * as ROUTES from "@constants/routes";
import ArrowNarrowRightIcon from "@icons/ArrowNarrowRightIcon";

export default function NotFoundPage() {
  return (
    <>
      <Head>
        <title>Not Found | Recipe Venture</title>
      </Head>
      <AppLayout>
        <section className="py-28" style={{ height: "80vh" }}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-8xl md:text-8xl text-gray-800 dark:text-white mb-4">
                404
              </h2>
              <p className="text-2xl md:text-3xl text-gray-500 dark:text-gary-300 mb-4">
                The page you are looking for is not found!
              </p>
              <Link href={ROUTES.HOME}>
                <a className="inline-flex items-center justify-between text-white text-base px-3 py-1 bg-purple-500 hover:bg-purple-400 dark:hover:bg-purple-400  rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-700 focus:ring-purple-500">
                  Return Home
                  <span className="ml-1">
                    <ArrowNarrowRightIcon />
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </section>
      </AppLayout>
    </>
  );
}
