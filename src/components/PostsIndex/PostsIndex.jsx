import React from "react";
import uuid from "uuid/v4";

import PostDetails from "../PostDetails/PostDetails";
import PostCard from "../PostCard/PostCard";

import "./PostsIndex.scss";

class PostsIndex extends React.Component {
  getPosts() {
    const { postEdges } = this.props;
    const posts = [];

    postEdges.forEach(postEdge => {
      posts.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        video: postEdge.node.frontmatter.video,
        demo: postEdge.node.frontmatter.demo,
        github: postEdge.node.frontmatter.github,
        images: postEdge.node.frontmatter.images,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return posts;
  }

  render() {
    const posts = this.getPosts();
    const isEven = n => n % 2 === 0;
    const rowClasses = i => (isEven(i) ? "row" : "row odd");

    return (
      <div id="projects">
        {posts.map((post, index) => (
          <div key={uuid()} className={rowClasses(index)}>
            <div className="container">
              <div className="col s12 m6 l5">
                <PostDetails post={post} />
              </div>
              <div className="col s12 m12 l1 hide-on-med-and-down" />
              <div className="col s12 m6 l6">
                <PostCard post={post} />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default PostsIndex;
