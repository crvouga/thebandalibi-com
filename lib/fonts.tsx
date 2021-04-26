export const fonts = [
  {
    href: "fonts/rock-salt-v11-latin-regular.woff2",
    type: "font/ttf",
  },
  {
    href: "/fonts/bebas-neue-v2-latin-regular.woff2",
    type: "font/woff2",
  },
  {
    href: "/fonts/ibm-plex-sans-v8-latin-700.woff2",
    type: "font/woff2",
  },
  {
    href: "/fonts/ibm-plex-sans-v8-latin-500.woff2",
    type: "font/woff2",
  },
];

export const Fonts = () => {
  return (
    <>
      {/* Preloading fonts to combat FOUT */}
      {fonts.map((font) => (
        <link
          key={font.href}
          rel="preload"
          as="font"
          crossOrigin="anonymous"
          {...font}
        />
      ))}
      <link href="/fonts/fonts.css" rel="preload stylesheet" type="text/css" />
    </>
  );
};

export const fontFamilies = {
  logo: "Rock Salt",
  heading: "Bebas Neue",
  body: "IBM Plex Sans",
};

export const fontStacks = {
  heading: [
    "Bebas Neue",
    "'Roboto'",
    "'Helvetica'",
    "'Arial'",
    "sans-serif",
  ].join(", "),

  body: [
    "IBM Plex Sans",
    "'Roboto'",
    "'Helvetica'",
    "'Arial'",
    "sans-serif",
  ].join(", "),
};
