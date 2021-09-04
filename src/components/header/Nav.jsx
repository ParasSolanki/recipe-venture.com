import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav({ links }) {
  const router = useRouter();

  return (
    <nav>
      <ul className="flex justify-between items-center space-x-7">
        {links.map((link) => (
          <li key={link.id}>
            <Link href={link.href}>
              <a
                className={`${
                  link.href === router.pathname
                    ? "text-purple-600 font-semibold dark:text-purple-600"
                    : "text-gray-900 dark:text-white"
                } text-base hover:text-purple-500 dark:hover:text-purple-500`}
                title={link.title}
              >
                {link.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
