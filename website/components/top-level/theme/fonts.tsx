/*

Adobe Fonts:
https://fonts.adobe.com/my_fonts?project_id=luu8plf#web_projects-section

Google Fonts:
https://fonts.google.com/

*/

export const FontStacks = {
  "Palette Mosaic": `'Palette Mosaic', cursive`,
  "PT Mono": `'PT Mono', monospace`,
};

export const FontLinks = () => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=PT+Mono&family=Palette+Mosaic&display=swap"
        rel="stylesheet"
      />
    </>
  );
};
