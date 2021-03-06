import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostsIndex from "../components/PostsIndex/PostsIndex";
import config from "../../data/SiteConfig";

export default class TagTemplate extends React.Component {
  render() {
    const {
      pageContext: { tag },
      data: {
        allMarkdownRemark: { edges: postEdges }
      }
    } = this.props;

    return (
      <Layout>
        <div className="tag-container">
          <Helmet title={`Posts tagged as "${tag}" | ${config.siteTitle}`} />
          <PostsIndex postEdges={postEdges} />
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            demo
            date
          }
        }
      }
    }
  }
`;
