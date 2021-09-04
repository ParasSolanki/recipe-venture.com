import React from "react";
import FacebookIcon from "@icons/social/FacebookIcon";
import LinkedInIcon from "@icons/social/LinkedInIcon";
import MailIcon from "@icons/social/MailIcon";
import TwitterIcon from "@icons/social/TwitterIcon";

export default function SocialLinks({ frontMatter }) {
  const { name, image, excerpt, slug } = frontMatter;
  const url = `https://recipe-venture.com/recipe/${slug}`;

  return (
    <div className="fixed w-full left-0 bottom-0 z-50 flex flex-row flex-shrink-0 items-center justify-between lg:w-auto lg:block lg:bottom-1/3 2xl:bottom-1/2">
      <a
        href={`https://www.facebook.com/sharer.php?u=${url}`}
        title="Facebook"
        tabIndex="0"
        target="_blank"
        rel="noopener"
        role="button"
        className="text-white w-full py-3 flex justify-center items-center cursor-pointer lg:w-16 lg:hover:w-20 transition-all"
        style={{ backgroundColor: "rgb(59, 89, 152)" }}
      >
        <span className="sr-only">Share on facebook</span>
        <span className="text-lg">
          <FacebookIcon />
        </span>
      </a>
      <a
        href={`https://twitter.com/intent/tweet?text=${name} #RecipeVenture ${url}`}
        title="Twitter"
        tabIndex="0"
        target="_blank"
        rel="noopener"
        role="button"
        className="text-white w-full py-3 flex justify-center items-center cursor-pointer lg:w-16 lg:hover:w-20 transition-all"
        style={{ backgroundColor: "rgb(29, 161, 242)" }}
      >
        <span className="sr-only">Share on twitter</span>

        <span className="text-lg">
          <TwitterIcon />
        </span>
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&amp;url=${url}&amp;title=${name}&amp;summary=${excerpt}&amp;source=Recipe Venture`}
        title="LinkedIn"
        tabIndex="0"
        target="_blank"
        rel="noopener"
        role="button"
        className="text-white w-full py-3 flex justify-center items-center cursor-pointer lg:w-16 lg:hover:w-20 transition-all"
        style={{ backgroundColor: "rgb(0, 119, 181)" }}
      >
        <span className="sr-only">Share on linkedin</span>

        <span className="text-lg">
          <LinkedInIcon />
        </span>
      </a>
      <a
        href={`mailto:?subject=${name}&amp;body=Check out this recipe on ${url}`}
        title="Email"
        tabIndex="0"
        target="_blank"
        rel="noopener"
        role="button"
        className="text-white w-full py-3 flex justify-center items-center cursor-pointer lg:w-16 lg:hover:w-20 transition-all"
        style={{ backgroundColor: "rgb(132, 132, 132)" }}
      >
        <span className="sr-only">Share via email</span>

        <span className="text-lg">
          <MailIcon />
        </span>
      </a>
    </div>
  );
}
