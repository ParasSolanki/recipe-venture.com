import React, { useState, useEffect } from "react";
import ArrowUpIcon from "@icons/ArrowUpIcon";

export default function ScrollToTop() {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollPos(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollPos]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`fixed h-10 w-10 bg-indigo-600 z-50 text-white text-base bottom-5 right-4 rounded-full group cursor-pointer shadow-md transform ${
        scrollPos > 250
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-full"
      } transition-all ease-in-out overflow-hidden`}
      onClick={handleScrollToTop}
    >
      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:-translate-y-full group-hover:opacity-0 transition-all">
        <ArrowUpIcon />
      </span>
      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:-translate-y-1/2 group-hover:opacity-100 transition-all">
        <ArrowUpIcon />
      </span>
    </button>
  );
}
