import "./sass/mystyles.scss";

import React from "react";
import Panel from "./src/components/newPanel/newPanel";

export const wrapPageElement = ({ element, props }) => {
  return <Panel {...props}>{element}</Panel>;
};

export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  const headComponents = getHeadComponents();
  const newHeadComponents = headComponents.concat([
    // I was seeing unique key prop errors on build, before adding the key props here
    // I don't know if it's necessary to keep on all of these elements
    <link
      key={Math.random().toString()}
      rel="apple-touch-icon"
      sizes="57x57"
      href="/apple-icon-57x57.png"
    />,
    <link
      key={Math.random().toString()}
      rel="apple-touch-icon"
      sizes="72x72"
      href="/apple-icon-72x72.png"
    />,
    <link
      key={Math.random().toString()}
      rel="apple-touch-icon"
      sizes="60x60"
      href="/apple-icon-60x60.png"
    />,
    <link
      key={Math.random().toString()}
      rel="apple-touch-icon"
      sizes="76x76"
      href="/apple-icon-76x76.png"
    />,
    <link
      key={Math.random().toString()}
      rel="apple-touch-icon"
      sizes="114x114"
      href="/apple-icon-114x114.png"
    />,
    <link
      key={Math.random().toString()}
      rel="apple-touch-icon"
      sizes="120x120"
      href="/apple-icon-120x120.png"
    />,
    <link
      key={Math.random().toString()}
      rel="apple-touch-icon"
      sizes="144x144"
      href="/apple-icon-144x144.png"
    />,
    <link
      key={Math.random().toString()}
      rel="apple-touch-icon"
      sizes="152x152"
      href="/apple-icon-152x152.png"
    />,
    <link
      key={Math.random().toString()}
      rel="apple-touch-icon"
      sizes="180x180"
      href="/apple-icon-180x180.png"
    />,
    <link
      key={Math.random().toString()}
      rel="icon"
      type="image/png"
      sizes="192x192"
      href="/android-icon-192x192.png"
    />,
    <link
      key={Math.random().toString()}
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/favicon-32x32.png"
    />,
    <link
      key={Math.random().toString()}
      rel="icon"
      type="image/png"
      sizes="96x96"
      href="/favicon-96x96.png"
    />,
    <link
      key={Math.random().toString()}
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/favicon-16x16.png"
    />,
    <link
      key={Math.random().toString()}
      rel="manifest"
      href="/manifest.json"
    />,
    <meta
      key={Math.random().toString()}
      name="msapplication-TileColor"
      content="#ffffff"
    />,
    <meta
      key={Math.random().toString()}
      name="msapplication-TileImage"
      content="/ms-icon-144x144.png"
    />,
    <meta
      key={Math.random().toString()}
      name="theme-color"
      content="#ffffff"
    />,
  ]);
  replaceHeadComponents(newHeadComponents);
};
