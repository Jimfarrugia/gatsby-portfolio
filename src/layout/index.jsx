import React from "react";
import Helmet from "react-helmet";

import Header from "../components/Header/Header"; // eslint-disable-line
import Footer from "../components/Footer/Footer"; // eslint-disable-line
import config from "../../data/SiteConfig";

import "materialize-css/dist/css/materialize.min.css";
import "./index.scss";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <Header />
        <main>
          {children}
        </main>
        <Footer config={config} />
      </>
    );
  }
}
