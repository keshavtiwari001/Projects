import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />

        <div>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="author" content={author} />
        </div>

        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "70vh" }}>{children}</main>
      <ToastContainer />
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Ecomm app - shop now",
  description: "mern stack project",
  keywords: "mern,react,node,express,mongodb",
  author: "keshav tiwari",
};

export default Layout;
