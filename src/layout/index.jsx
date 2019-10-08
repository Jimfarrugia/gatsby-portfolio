import React from "react";
import Helmet from "react-helmet";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/ContactForm/ContactForm";
import config from "../../data/SiteConfig";

import "materialize-css/dist/css/materialize.min.css";
import "./index.scss";

export default class MainLayout extends React.Component {
  render() {
    const { children, postLinks } = this.props;
    return (
      <>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <Header postLinks={postLinks} />
        <main>{children}</main>
        <ContactForm />
        <Footer config={config} />
      </>
    );
  }
}
