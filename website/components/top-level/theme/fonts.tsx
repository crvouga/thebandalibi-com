/*

Adobe Fonts:
https://fonts.adobe.com/my_fonts?project_id=luu8plf#web_projects-section

Google Fonts:
https://fonts.google.com/

*/

export const Fonts = {
  SystemUI: ["system-ui"].join(", "),
  SpecialElite: ["Special Elite", "cursive"].join(", "),
  IBMPlexMono: ["IBM Plex Mono", "monospace"].join(", "),
  BadlyStamped: ["Badly Stamped", "cursive"].join(", "),
  Bungee: ["bungee", "sans-serif"].join(", "),
  Sunflower: ["sunflower", "sans-serif"].join(", "),
  BebasNeue: ["Bebas Neue", "sans-serif"].join(", "),
  Roboto: ["Roboto", "sans-serif"].join(", "),
  Pacifico: ["Pacifico", "cursive"].join(", "),
};

const GOOGLE_FONTS_HREF =
  "https://fonts.googleapis.com/css2?display=swap&family=Bebas+Neue&family=Roboto:wght@500;900&family=Pacifico&family=IBM+Plex+Mono:wght@500&family=Special+Elite";

const GoogleFontsLinks = () => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />

      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />

      <link href={GOOGLE_FONTS_HREF} rel="stylesheet" />
    </>
  );
};

export const FontLinks = () => {
  return (
    <>
      <GoogleFontsLinks />
    </>
  );
};
