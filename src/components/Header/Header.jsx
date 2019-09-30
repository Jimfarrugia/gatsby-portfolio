import { Link } from "gatsby";
import React from "react";

import Sidenav from "../Sidenav/LoadableSidenav";

import "./Header.scss";

export const Header = () => (
  <header id="page-header">
    <Sidenav />
    <div id="logo">
      <Link to="/">
        <img src="/images/jflogo-white.svg" alt="Jim Farrugia Logo" />
      </Link>
    </div>
    <h2 className="center">Jim Farrugia</h2>
    <h5 className="center">Full-Stack Web Developer</h5>
  </header>
);

export default Header;
