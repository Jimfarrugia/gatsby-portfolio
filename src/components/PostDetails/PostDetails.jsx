import React from "react";
import { Link } from "gatsby";
import Icon from "@mdi/react";
import { mdiGithubCircle, mdiLaunch } from "@mdi/js";

import "./PostDetails.scss";

const ProjectDetails = ({ post }) => (
  <div className="img-content">
    <Link to={post.path}>
      <h3 className="project-title">{post.title}</h3>
    </Link>
    <div className="project-summary">
      <p>{post.excerpt}</p>
    </div>
    <div className="project-links">
      <Link to={post.path} className="btn waves-effect waves-light">
        View Project
      </Link>
      {post.github && (
        <a
          href={post.github}
          className="btn waves-effect waves-light"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon path={mdiGithubCircle} size={1} />
          Github
        </a>
      )}
      {post.demo && (
        <a
          href={post.demo}
          className="btn waves-effect waves-light"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon path={mdiLaunch} size={0.95} />
          Live Demo
        </a>
      )}
    </div>
  </div>
);

export default ProjectDetails;
