/*

Google Fonts:
https://fonts.google.com/

*/

export const FontStacks = {
  // "Palette Mosaic": `'Palette Mosaic', monospace`,
  "PT Mono": `'PT Mono', monospace`,
};

export const DocumentHeadFontLinks = () => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=PT+Mono&display=swap"
        rel="stylesheet"
      />
    </>
  );
};
