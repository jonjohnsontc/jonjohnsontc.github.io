import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";
import SEO from "../components/seo";

export default function Template({ data }) {
  const { mdx } = data;
  const { frontmatter, body } = mdx;

  return (
    <article className={`blog-post-container blog-post-content container`}>
      <SEO title={`${frontmatter.title} | Jon Johnson`} article={true} />
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

      <MDXRenderer>{body}</MDXRenderer>

      <footer
        className="footer is-flex is-justify-content-center"
        children={
          <span className="has-text-centered">
            ~ Thanks for reading! If you enjoyed it, consider sharing it with
            someone u like 💜 ~
          </span>
        }
      />
    </article>
  );
}
export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
