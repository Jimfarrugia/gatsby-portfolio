import React, { Component } from "react";
import Icon from "@mdi/react";
import {  mdiArrowUp } from "@mdi/js";

import IconMenu from "../IconMenu/IconMenu";

import "./Footer.scss";

class Footer extends Component {
  scrollToTop = () => window.scroll({ top: 0, left: 0, behavior: 'smooth' });

  render() {
    const { config } = this.props;

    return (
      <footer id="page-footer">
        <div className="container">
          <div className="center">
            <button type="button" className="backToTopBtn" onClick={this.scrollToTop}>
              <Icon path={mdiArrowUp} size={2} />
              <br />
              Back to Top
            </button>
          </div>
          
          <IconMenu config={config} iconSize={1.5} />

          <div className="footer-copyright">
            <p className="center">{config.copyright}</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
