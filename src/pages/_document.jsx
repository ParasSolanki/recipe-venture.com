import Document, { Html, Head, Main, NextScript } from "next/document";

export default class AppDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content="#000000"></meta>
          <link rel="icon" sizes="64x64" href="/recipe-favicon.ico" />
          <link rel="apple-touch-icon" href="/recipe-apple-icon.png" />
        </Head>
        <body className="antialiased bg-white dark:bg-gray-800 font-poppins">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
