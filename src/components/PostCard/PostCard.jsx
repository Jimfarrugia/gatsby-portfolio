import React from 'react';
import { Link } from 'gatsby';

import "./PostCard.scss";

const PostCard = ({ post }) => (
  <div className="card">
    <div className="card-image">
      <img src={post.cover} alt={post.title} />
      <span className="card-title">{post.title}</span>
      <Link to="/" className="btn-floating halfway-fab waves-effect waves-light">
        {/* link to modal id  */}
        <i className="material-icons">image</i>
      </Link>
    </div>
    <div className="card-content">
      <p>
        {post.tags &&
          post.tags.map((item, index, array) => {
            const seperator = (index < array.length - 1) ? ", " : "";
            return (
              <em key={item}>
                {item}
                {seperator}
              </em>
            )
          })
        }
      </p>
    </div>
  </div>
)

export default PostCard;