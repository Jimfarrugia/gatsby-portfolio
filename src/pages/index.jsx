import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import Layout from "../layout";
import PostsIndex from "../components/PostsIndex/PostsIndex";
import SEO from "../components/SEO/SEO";

import config from "../../data/SiteConfig";

class Index extends React.Component {
  render() {
    const {
      data: {
        allMarkdownRemark: { edges: postEdges }
      }
    } = this.props;

    return (
      <Layout>
        <Helmet title={config.siteTitle} />
        <SEO />
        <PostsIndex postEdges={postEdges} />
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
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
            date
          }
        }
      }
    }
  }
`;
