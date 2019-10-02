import { Link } from "gatsby";
import React, { Component } from "react";
import M from "materialize-css";

import Bio from "./Bio";
import PortfolioMenu from "./PortfolioMenu";

import "./Sidenav.scss";

export class Sidenav extends Component {
  componentDidMount() {
    const options = {
      inDuration: 250,
      outDuration: 200,
      draggable: true
    };
    //* Init Sidenav with options
    M.Sidenav.init(this.Sidenav, options);

    //* Get and control an instance
  }
  
  handleClose = () => {
    const instance = M.Sidenav.getInstance(this.Sidenav);
    instance.close();
  }

  render() {
    return (
      <>
        {/* Sidebar Nav Trigger Button */}
        <div id="sidenav-trigger" className="container">
          <a
            href="!#"
            data-target="slide-out"
            className="sidenav-trigger show-on-large"
          >
            <i className="material-icons">menu</i>
          </a>
        </div>

        <nav id="top-nav" className="transparent z-depth-0" />

        {/* Sidebar Nav */}
        <ul
          id="slide-out"
          className="sidenav"
          ref={Sidenav => {// eslint-disable-line
            this.Sidenav = Sidenav;
          }}
        >
          <nav>
            <li>
              <Bio />
            </li>
            <li>
              <Link to="/">
                <i className="material-icons">home</i>
                Home
              </Link>
            </li>
            <li>
              <PortfolioMenu />
            </li>
            <li>
              <Link to="/">
                <i className="material-icons">library_books</i>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/about">
                <i className="material-icons">face</i>
                About
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="material-icons">list_alt</i>
                Resume
              </Link>
            </li>
            <li>
              <Link to="#contact-form" onClick={this.handleClose()}>
                <i className="material-icons">mail</i>
                Contact
              </Link>
            </li>
          </nav>
        </ul>
      </>
    );
  }
}

export default Sidenav;
