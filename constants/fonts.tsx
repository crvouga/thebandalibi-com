import React from "react";

export const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@600&family=IBM+Plex+Sans:wght@300;500;600;700&display=swap";

export const fontStacks = {
  heading: `Bebas Neue, Impact, sans-serif`,
  body: `IBM Plex Sans, sans-serif`,
};

export const FONT_AWESOME_HREF =
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";

export const Fonts = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="preload" as="style" href={FONT_HREF} />
      <link rel="stylesheet" href={FONT_HREF} />
      <noscript>
        <link rel="stylesheet" href={FONT_HREF} />
      </noscript>
    </>
  );
};
