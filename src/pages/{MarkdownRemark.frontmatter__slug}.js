import React from "react";
import { graphql } from "gatsby";
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; 
  const { frontmatter, html } = markdownRemark;

  return (
    <div className={`blog-post-container container`}>
      <div className={`blog-post hero is-medium has-background-grey-darker`}>
        {/* We render a blank hero-body, and hero-foot with text to 
        give the title at bottom look */}
        <div className={`hero-body`}></div>
        <div className={`hero-foot`}>
          <p className={`title is-size-1 is-inline has-text-white is-family-sans-serif`}>{frontmatter.title}</p>
          <p className={`pl-6 subtitle is-inline has-text-white`}>{frontmatter.date}</p>
        </div>
      </div>

      <div
        className={`blog-post-content mt-6`}
        dangerouslySetInn erHTML={{ __html: html }}
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
