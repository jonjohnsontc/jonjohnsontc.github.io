import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const title = <Helmet><title>{frontmatter.title} | JonJ.io</title></Helmet>

  return (
    <div className={`blog-post-container container`}>
      {title}
      <div className={`blog-post hero is-medium has-background-grey-darker`}>
        {/* We render a blank hero-body, and hero-foot with text to 
        give the title at bottom look */}
        <div className={`hero-body`}></div>
        <div className={`hero-foot`}>
          <p
            className={`title is-size-1 is-inline has-text-white is-family-sans-serif`}
          >
            {frontmatter.title}
          </p>
        </div>
      </div>
      
      <span className={`blog-date`}>Published on: {frontmatter.date}</span>
      <div
        className={`blog-post-content mt-3`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <footer
        className="footer is-flex is-justify-content-center"
        children={
          <span className="has-text-centered">
            ~ Thanks for reading! If you enjoyed it, consider sharing it with
            someone u like 💜 ~
          </span>
        }
      />
    </div>
  );
}
export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
