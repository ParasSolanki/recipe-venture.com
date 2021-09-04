import React from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import Logo from "@icons/Logo";
import { links } from "@fixtures/links";
import * as ROUTES from "@constants/routes";

export default function Footer() {
  return (
    <footer className="w-full py-16 bg-gray-200 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center">
          <div className="max-w-2xl mx-auto w-64 sm:w-96 grid gap-y-2 grid-cols-2 sm:grid-cols-4 text-center mb-6">
            {links.map((link, index) => (
              <Link href={link.href} key={index}>
                <a
                  className="inline-block text-gray-800 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 
                  focus:ring-offset-gray-200 focus:ring-gray-700 dark:focus:ring-offset-gray-800 rounded dark:focus:ring-gray-300"
                  title={link.title}
                >
                  {link.name}
                </a>
              </Link>
            ))}
          </div>
          <div className="mb-6">
            <Link href={ROUTES.HOME}>
              <a
                className="w-40 h-16 block text-gray-900 text-xl dark:text-white rounded focus:outline-none"
                title="Recipe Venture"
              >
                <span className="w-full h-full block">
                  <Image src="/logo.png" alt="logo" width="200" height="80" />
                </span>
              </a>
            </Link>
          </div>
          <div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
