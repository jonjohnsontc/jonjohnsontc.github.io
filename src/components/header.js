import React from "react";

/**
 * Designed so that I can have anchor links to all my blog headlines
 * */
export default function Header(props) {
  const title = props.title.toLowerCase().split(" ").join("-");
  return (
    <>
      <h2 id={title}>
        <a className="anchor blog-title" href={`#${title}`}>
          {props.title}
        </a>
      </h2>
      <br />
    </>
  );
}
