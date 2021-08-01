import { Link } from "@reach/router";
import { graphql } from "gatsby";
import React from "react";

function BlogListItem(props) {
  return (
    <div className={`blog-list-box block`}>
      <ul className={`level`}>
        <li className={`is-size-3`}>{props.date}</li>
        <li className={`is-size-3 level-item`}><Link to="/blog/test-post/">{props.title}</Link></li>
      </ul>
    </div>
  );
}

export default function Blog() {
  // 
  // const blogs = graphql`Query`
  return (
    <div className={`container blog`}>
      <BlogListItem date="5/12/88" title="Little Jonny was born" />
    </div>
  );
}
