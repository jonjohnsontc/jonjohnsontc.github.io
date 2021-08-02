import { Link } from "@reach/router";
import { graphql } from "gatsby";
import React from "react";

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
    allMarkdownRemark {
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

export default function Blog({ data }) {
  // TODO: I want to grab all post titles, slugs, and dates in src/markdown-pages
  const { allMarkdownRemark } = data;
  const { nodes } = allMarkdownRemark;

  let posts = [];

  for (let index = 0; index < nodes.length; index++) {
    const post = nodes[index];
    posts.push(
      <BlogListItem
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        link={post.frontmatter.slug}
      />
    );
  }

  const blogLog = console.log(posts.length);

  return (
    <div className={`container blog`}>
      <div>Total posts {nodes.length}</div>
      {posts}
    </div>
  );
}
