const composePlugins = require("next-compose-plugins");
const mdxEnhanced = require("next-mdx-enhanced");

module.exports = composePlugins(
  [
    mdxEnhanced({
      usesSrc: true,
      layoutPath: "./src/modules/layouts",
    }),
  ],
  {
    images: {
      domains: ["www.archanaskitchen.com"],
    },
  }
);
