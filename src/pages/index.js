import React from "react";
import { Splash } from "../components/page";
import Logo from "../components/logo";
import { Helmet } from "react-helmet";

import CircleArc from "../components/circleArc";

function Greeting(props) {
  let greeting = props.greeting || "Hi, I'm Jon :0)";

  return <h1 className={`title has-text-centered`}>{greeting}</h1>;
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
      <CircleArc
        cX={100}
        cY={100}
        rX={50}
        rY={50}
        t1={0}
        rot={300}
        sweep={358}
      />
    </>
  );
}
