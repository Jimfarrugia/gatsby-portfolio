import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Icon from "@mdi/react";
import { mdiGithubCircle, mdiLaunch } from "@mdi/js";
import Layout from "../layout";
import PostTags from "../components/PostTags/PostTags";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

import "./post.scss";
import "./b16-tomorrow-dark.css";

export default class PostTemplate extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const { slug } = pageContext;
    const postNode = data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <Layout>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <div id="post" className="container">
          <h2 className="post-title">{post.title}</h2>
          {/* render video if it exists, else render cover */}
          {post.video && (
            <iframe 
              className="video"
              title={post.title}
              src={post.video}
              frameBorder="0"
              allowFullScreen
            />
          ) || (
            <img className="post-cover" src={post.cover} alt={post.title} />
          )}
          {(post.demo || post.github) && (
            <div className="post-links">
              {post.demo && (
                <a href={post.demo} className="btn" target="_blank" rel="noopener noreferrer">
                  <Icon path={mdiLaunch} size={0.95} />
                  Live Demo
                </a>
              )}
              {post.github && (
                <a href={post.github} className="btn" target="_blank" rel="noopener noreferrer">
                  <Icon path={mdiGithubCircle} size={1} />
                  Github
                </a>
              )}
            </div>
          )}
          <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
          <div className="post-tags">
            <PostTags tags={post.tags} />
          </div>
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        video
        demo
        github
        images
        date
        category
        tags
      }
      fields {
        slug
        date
      }
    }
  }
`;
