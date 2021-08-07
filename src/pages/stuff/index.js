import { Link } from "@reach/router";
import { graphql } from "gatsby";
import React, { useState } from "react";

export const stuffQuery = graphql`
  query StuffQuery {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "stuff" } } }) {
      nodes {
        frontmatter {
          title
          date
          pic
        }
        html
      }
    }
  }
`;

function Carousel(props) {
  return (
    <div>
      <img className={`image`} src={props.pic} />
      <article
        className={`mt-6`}
        dangerouslySetInnerHTML={{ __html: props.content }}
      />
    </div>
  );
}

export default function Stuff({ data }) {
  const nodes = data.allMarkdownRemark.nodes;
  nodes.sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));

  const nodeLength = nodes.length;
  const [idx, setIdx] = useState(0);

  return (
    <>
      <div>
        {/* TODO: Some sort of grid view showing all items in the carousel*/}
      </div>
      <div className={`columns is-centered is-vcentered`}>
        <div className={`column is-flex is-justify-content-end`}>
          <button
            disabled={(idx === 0) ? true : null}
            onClick={() => setIdx(idx - 1)}
            className={`stuff-button is-size-1`}
          >
            &lt;
          </button>
        </div>
        <div className={`column is-flex is-justify-content-center is-half`}>
          <Carousel
            pic={nodes[idx].frontmatter.pic}
            content={nodes[idx].html}
          />
        </div>
        <div className={`column`}>
          <button
            disabled={(idx === nodes.length - 1) ? true : null}
            onClick={() => setIdx(idx + 1)}
            className={`stuff-button is-size-1`}
          >
            &gt;
          </button>
        </div>
      </div>
    </>
  );
}
