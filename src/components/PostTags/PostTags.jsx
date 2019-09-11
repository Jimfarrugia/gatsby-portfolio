import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";

import "./PostTags.scss";

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div className="post-tag-container">
        {tags && (
        <>
          <h5>Tags:</h5>
          {tags.map(tag => (
            <Link
              key={tag}
              style={{ textDecoration: "none" }}
              to={`/tags/${_.kebabCase(tag)}`}
            >
              <button type="button" className="btn">{tag}</button>
            </Link>
          ))}
        </>
        )}
      </div>
    );
  }
}

export default PostTags;
