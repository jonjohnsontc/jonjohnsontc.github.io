import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import CodeBlock from "../components/codeBlock";
import { graphql } from "gatsby";
import SEO from "../components/seo";

const components = {
  pre: CodeBlock
}

// Right now, this is roughtly the same as my other blog template, just without
// the hero banner being included.
export default function Template({ data }) {
  const { mdx } = data;
  const { frontmatter, body } = mdx;

  return (
    <article className={`blog-post-container blog-post-content container`}>
      <SEO title={`${frontmatter.title} | Jon Johnson`} article={true} />
       
      <MDXProvider components={components}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>

      <footer
        className="footer is-flex is-justify-content-center"
        children={
          <span className="has-text-centered">
            ~ Thanks for reading! If you enjoyed it, consider sharing it with someone u like 💜 ~
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
