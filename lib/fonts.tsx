export const fonts = [
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
