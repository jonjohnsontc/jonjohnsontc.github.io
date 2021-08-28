import { graphql } from "gatsby";
import React, { useState } from "react";
import { Splash } from "../../components/page";

export const stuffQuery = graphql`
  query StuffQuery {
    allMarkdownRemark(filter: { frontmatter: { slug: { eq: "/stuff/" } } }) {
      nodes {
        frontmatter {
          title
          date
          pic
          icon
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
          <img src={props.pic} alt={props.title + " logo"} width="500px" />
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

  // used to represent each `stuff` entry above the carousel
  const Dot = props => {
    let classes = `dot is-inline-flex mr-2`;
    if (props.icon == null || props.icon === "") {
      classes += ` dot-background`;
    }
    return (
      <button
        onClick={props.onClick}
        className={classes}
        key={props.key}
        disabled={props.disabled === true ? true : null}
      >
        <span>
          <img
            src={props.icon}
            width="50px"
            alt={props.icon == null ? "" : props.title}
          />
        </span>
      </button>
    );
  };

  const Dots = () => {
    const numDots = nodes.length;
    let dotArray = [];
    for (let index = 0; index < numDots; index++) {
      if (index === idx) {
        dotArray[index] = Dot({
          disabled: true,
          onClick: () => setIdx(index),
          key: index,
          icon: nodes[index].frontmatter.icon,
        });
      } else {
        dotArray[index] = Dot({
          disabled: false,
          onClick: () => setIdx(index),
          key: index,
          icon: nodes[index].frontmatter.icon,
        });
      }
    }
    return (
      // For whatever reason, applying Bulma styles via classNames wasn't working
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        {dotArray}
      </div>
    );
  };

  const stuffTitle = (
    <p className={`title is-size-1 has-text-centered`}>Stuff</p>
  );
  const stuffPrompt = (
    <p className={`is-size-4`}>
      Here's some side-projects that I've worked on.
    </p>
  );

  // This is the standard layout for 'Stuff', it's used in SSR
  // and layouts > 800px wide
  const allTheStuff = (
    <>
      <Splash logo={stuffTitle} prompt={stuffPrompt} />
      <div className={`columns is-centered mt-6`}>
        <div className={`column is-flex is-justify-content-flex-end`}>
          <button
            disabled={idx === 0 ? true : null}
            onClick={() => setIdx(idx - 1)}
            className={`stuff-button is-size-1 stuff-reg`}
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
            title={nodes[idx].frontmatter.title}
          />
        </div>
        <div className={`column is-flex`}>
          <button
            disabled={idx === nodes.length - 1 ? true : null}
            onClick={() => setIdx(idx + 1)}
            className={`stuff-button is-size-1 stuff-reg`}
          >
            &gt; {/* Greater than sign */}
          </button>
        </div>
      </div>
    </>
  );

  if (typeof window !== "undefined") {
    // If the size of the display width is less than 800px
    // we use the `mobile` version of the page, which moves the
    // left arrow button underneath the Carousel so it's not
    // on top of it.
    if (window.innerWidth <= 800) {
      return (
        <>
          <Splash logo={stuffTitle} prompt={stuffPrompt} />
          <div className={`columns is-centered is-vcentered mt-6`}>
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
            <div className={`column is-flex is-justify-content-center`}>
              <button
                disabled={idx === 0 ? true : null}
                onClick={() => setIdx(idx - 1)}
                className={`stuff-button is-size-1`}
              >
                &lt; {/* Less than sign */}
              </button>
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
  } else {
    return allTheStuff;
  }

  return allTheStuff;
}
