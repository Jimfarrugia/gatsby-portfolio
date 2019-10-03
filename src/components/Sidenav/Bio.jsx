import React from "react";
import { Link } from "gatsby";
import config from "../../../data/SiteConfig";

const Bio = () => (
  <div className="user-view center">
    <Link to="/">
      <img
        className="circle"
        src={config.userAvatar}
        alt="Jim's Avatar"
        style={{ backgroundColor: "rgba(25,25,25,0.5)" }}
      />
    </Link>
    <Link to="/">
      <span className="white-text name">{config.userName}</span>
    </Link>
    <Link to="/">
      <span className="white-text email">{config.userEmail}</span>
    </Link>
  </div>
);

export default Bio;
