import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostsIndex from "../components/PostsIndex/PostsIndex";
import config from "../../data/SiteConfig";

export default class CategoryTemplate extends React.Component {
  render() {
    const {
      pageContext: { category },
      data: {
        allMarkdownRemark: { edges: postEdges }
      }
    } = this.props;

    return (
      <Layout>
        <div className="category-container">
          <Helmet
            title={`Posts in category "${category}" | ${config.siteTitle}`}
          />
          <PostsIndex postEdges={postEdges} />
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
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
