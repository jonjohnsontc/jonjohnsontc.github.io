import { graphql } from "gatsby";
import React, { useState } from "react";

export const stuffQuery = graphql`
  query StuffQuery {
    allMarkdownRemark(filter: { frontmatter: { slug: { eq: "/stuff/" } } }) {
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
    <>
      <div>
        <div className={`is-flex is-justify-content-center stuff-image`}>
          <img src={props.pic} width="500px" />
        </div>
        <article
          className={`mt-6`}
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </>
  );
}

export default function Stuff({ data }) {
  const nodes = data.allMarkdownRemark.nodes;
  nodes.sort((a, b) => (a.frontmatter.date > b.frontmatter.date ? 1 : -1));

  const [idx, setIdx] = useState(0);

  const gotoIdx = index => {
    setIdx(index);
  };

  // used to represent each `stuff` entry above the carousel
  const Dot = props => (
    <button
      onClick={props.onClick}
      className={`dot is-inline-flex mr-2`}
      key={Math.random()}
      disabled={props.disabled === true ? true : null}
    >
      {/* I think I can leverage a span within the button to add an icon
      <span></span> */}
    </button>
  );
  const Dots = () => {
    const numDots = nodes.length;
    let dotArray = [];
    for (let index = 0; index < numDots; index++) {
      if (index === idx) {
        dotArray[index] = Dot({
          disabled: true,
          onClick: () => gotoIdx(index),
        });
      } else {
        dotArray[index] = Dot({
          disabled: false,
          onClick: () => gotoIdx(index),
        });
      }
    }
    return dotArray;
  };

  return (
    <>
      <div className={`columns is-centered is-vcentered mt-6`}>
        <div className={`column is-flex is-justify-content-flex-end`}>
          <button
            disabled={idx === 0 ? true : null}
            onClick={() => setIdx(idx - 1)}
            className={`stuff-button is-size-1`}
          >
            &lt; {/* Less than sign */}
          </button>
        </div>
        <div className={`column is-half`}>
          <Dots />
          <h1 className={`title has-text-centered is-family-sans-serif`}>
            {nodes[idx].frontmatter.title}
          </h1>
          <Carousel
            pic={nodes[idx].frontmatter.pic}
            content={nodes[idx].html}
          />
        </div>
        <div className={`column`}>
          <button
            disabled={idx === nodes.length - 1 ? true : null}
            onClick={() => setIdx(idx + 1)}
            className={`stuff-button is-size-1`}
          >
            &gt; {/* Greater than sign */}
          </button>
        </div>
      </div>
    </>
  );
}
