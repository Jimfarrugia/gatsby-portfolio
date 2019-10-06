import React, { useState, useCallback } from "react";
import Helmet from "react-helmet";
import Carousel, { Modal, ModalGateway } from "react-images";
import { graphql } from "gatsby";
import Icon from "@mdi/react";
import { mdiGithubCircle, mdiLaunch } from "@mdi/js";
import Gallery from "react-photo-gallery";
import Layout from "../layout";
import PostTags from "../components/PostTags/PostTags";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

import "./post.scss";
import "./b16-tomorrow-dark.css";

export const PostTemplate = props => {
  const { data, pageContext} = props;
  const { slug } = pageContext;
  const postNode = data.markdownRemark;
  const post = postNode.frontmatter;
  if (!post.id) {
    post.id = slug;
  }
  if (!post.category_id) {
    post.category_id = config.postDefaultCategoryID;
  }
  const images = post.images.map(src => {
    // get width & height values from specific indices in src string
    const width = +src.charAt(src.length - 7);
    const height = +src.charAt(src.length - 5);
    return { src, width, height };
  });

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  // eslint-disable-next-line
  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);
  
  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <Layout>
      <Helmet>
        <title>{`${post.title} | ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postPath={slug} postNode={postNode} postSEO />
      <div id="post" className="container">
        <h2 className="post-title">{post.title}</h2>
        {/* render video if it exists, else render cover */}
        {(post.video && (
          <iframe
            className="video"
            title={post.title}
            src={post.video}
            frameBorder="0"
            allowFullScreen
          />
        )) || (
          <img className="post-cover" src={post.cover} alt={post.title} />
        )}
        {(post.demo || post.github) && (
          <div className="post-links">
            {post.demo && (
              <a
                href={post.demo}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon path={mdiLaunch} size={0.95} />
                Live Demo
              </a>
            )}
            {post.github && (
              <a
                href={post.github}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon path={mdiGithubCircle} size={1} />
                Github
              </a>
            )}
          </div>
        )}
        <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
        {images && images.length > 1 && (
          <div className="post-gallery">
            <Gallery photos={images} onClick={openLightbox} />
            <ModalGateway>
              {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                  <Carousel
                    currentIndex={currentImage}
                    views={images.map(x => ({
                      ...x,
                      srcset: x.srcSet,
                      caption: x.title
                    }))}
                  />
                </Modal>
              ) : null}
            </ModalGateway>
          </div>
        )}
        <div className="post-tags">
          <PostTags tags={post.tags} />
        </div>
      </div>
    </Layout>
  );
};

export default PostTemplate;

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
