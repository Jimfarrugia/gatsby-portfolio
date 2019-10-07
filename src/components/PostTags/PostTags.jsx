import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";
import Icon from "@mdi/react";
import { mdiLinkVariant } from "@mdi/js";

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
                to={`/tags/${_.kebabCase(tag)}`}
                className="btn waves-effect waves-light"
              >
                <Icon path={mdiLinkVariant} size={1} />
                {tag}
              </Link>
            ))}
          </>
        )}
      </div>
    );
  }
}

export default PostTags;
