import { Link } from "@reach/router";
import { graphql } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import { Splash } from "../../components/page";

function BlogListItem(props) {

  return (
    <div className={`blog-list-box block`}>
      <ul className={`level`}>
        <li className={`is-size-3`}>{props.date}</li>
        <li className={`is-size-3 level-item`}>
          <Link to={props.link}>{props.title}</Link>
        </li>
      </ul>
    </div>
  );
}

export const blogQuery = graphql`
  query MyQuery {
    allMdx(filter: { frontmatter: { slug: { ne: "/stuff/" } } }) {
      nodes {
        frontmatter {
          title
          slug
          date
        }
      }
    }
  }
`;

const title = (
  <Helmet>
    <title>Blog | Jon Johnson</title>
  </Helmet>
);

export default function Blog({ data }) {
  const { allMdx } = data;
  const { nodes } = allMdx;

  // Sorting nodes by date
  // TODO: push this to graphql if you use mdx
  nodes.sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));

  const blogTitle = (
    <h1 className={`title is-size-1 has-text-centered`}>Blog</h1>
  );
  const blogPrompt = (
    <h2 className={`is-size-4 has-text-centered`}>
      Standard issue blog fare served fresh
    </h2>
  );

  return (
    <>
      {title}
      <Splash logo={blogTitle} prompt={blogPrompt} />
      <div className={`container blog mt-6`}>
        {nodes.map(node => (
          <BlogListItem
            key={node.frontmatter.slug}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            link={node.frontmatter.slug}
          />
        ))}
      </div>
    </>
  );
}
