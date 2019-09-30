import React from "react";
import { Link } from "gatsby";

import "./PostDetails.scss";

const ProjectDetails = ({ post }) => (
  <div className="img-content">
    <Link to={post.path}>
      <h3 className="project-title">{post.title}</h3>
    </Link>
    <div className="project-summary">
      <p>{post.excerpt}</p>
    </div>
    <div className="project links">
      <Link to={post.path} className="btn waves-effect waves-light">
        Read More
      </Link>
      <Link to="/" className="btn waves-effect waves-light">
        View Demo
      </Link>
    </div>
  </div>
);

export default ProjectDetails;
