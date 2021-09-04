import React from "react";
import Header from "@components/header";
import Footer from "@components/footer";
import ScrollToTop from "@components/ScrollToTop";

export default function AppLayout({ children }) {
  return (
    <>
      <div>
        <Header />
        <main className="w-full">{children}</main>
        <ScrollToTop />
      </div>
      <Footer />
    </>
  );
}
