export const FONTS = [
  {
    href: "/fonts/bebas-neue-v2-latin-regular.woff2",
    type: "font/woff2",
  },
  {
    href: "/fonts/roboto-v27-latin-regular.woff2",
    type: "font/woff2",
  },
  {
    href: "/fonts/roboto-v27-latin-900.woff2",
    type: "font/woff2",
  },
];

export const Fonts = () => {
  return (
    <>
      {/* Preloading fonts to combat FOUT */}
      {FONTS.map((font) => (
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
  heading: "Bebas Neue",
  body: "Roboto",
};

export const fontStacks = {
  heading: [
    "Bebas Neue",
    "'Roboto'",
    "'Helvetica'",
    "'Arial'",
    "sans-serif",
  ].join(", "),

  body: ["'Roboto'", "'Helvetica'", "'Arial'", "sans-serif"].join(", "),
};
