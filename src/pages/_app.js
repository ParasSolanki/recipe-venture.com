import Router from "next/router";
import NProgress from "nprogress";

import "../styles/tailwind.css";
import "../styles/globals.css";
import "../styles/nprogress.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
NProgress.configure({ showSpinner: true });

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
