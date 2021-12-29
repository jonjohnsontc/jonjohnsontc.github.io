import React from "react";
import { Splash } from "../components/page";
import Logo from "../components/logo";
import { Helmet } from "react-helmet";
import SEO from "../components/seo";

function Greeting(props) {
  let greeting = props.greeting || "Hi, I'm Jon :0)";

  return <p className={`title is-family has-text-centered`}>{greeting}</p>;
}

function Bio() {
  return (
    <p className={`subtitle has-text-centered`}>
      I'm a Software Engineer and creator of a few random things. I also love to
      write about what I'm working on from time to time. Hope you enjoy checking
      things out.
    </p>
  );
}

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Welcome to my website ~ Jon Johnson</title>
      </Helmet>
      <Splash
        logo={<Logo width="300" height="300" />}
        belowHeadline={<Bio />}
        prompt={<Greeting />}
      />
    </>
  );
}
