import React from "react";

const FontStyleSheetLink = ({ href }: { href: string }) => {
  return (
    <link
      href={href}
      as="style"
      rel="stylesheet preload prefetch"
      type="text/css"
      crossOrigin="anonymous"
    />
  );
};

export const FONT_HREF = {
  "Bebas Neue":
    "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@600&display=swap",

  "IBM Plex Sans":
    "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;500;600;700&display=swap",
};

export const FONT_FAMILIES: {
  [key: string]: keyof typeof FONT_HREF;
} = {
  heading: "Bebas Neue",
  body: "IBM Plex Sans",
};

export const FontLinks = () => {
  return (
    <React.Fragment>
      <link rel="preconnect" href="https://fonts.gstatic.com" />

      <FontStyleSheetLink href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

      {Object.values(FONT_HREF).map((href) => (
        <FontStyleSheetLink href={href} />
      ))}
    </React.Fragment>
  );
};
