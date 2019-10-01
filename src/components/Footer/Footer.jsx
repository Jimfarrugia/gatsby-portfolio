import React, { Component } from "react";
import Icon from "@mdi/react";
import {  mdiArrowUp } from "@mdi/js";

import IconMenu from "../IconMenu/IconMenu";

import "./Footer.scss";

class Footer extends Component {
  render() {
    const { config } = this.props;

    return (
      <footer id="page-footer">
        <div className="container">
          <div className="center">
            <a href="#page-header">
              <Icon path={mdiArrowUp} size={2} />
              <br />
              Back to Top
            </a>
          </div>
          
          <IconMenu config={config} />

          <div className="footer-copyright">
            <p className="center">{config.copyright}</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
