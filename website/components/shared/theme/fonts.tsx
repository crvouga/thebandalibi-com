/*

Adobe Fonts:
https://fonts.adobe.com/my_fonts?project_id=luu8plf#web_projects-section

Google Fonts:
https://fonts.google.com/

*/

export const Fonts = {
  SpecialElite: ["Special Elite", "cursive"].join(", "),
  IBMPlexMono: ["IBM Plex Mono", "monospace"].join(", "),
  BadlyStamped: ["Badly Stamped", "cursive"].join(", "),
  Bungee: ["bungee", "sans-serif"].join(", "),
  Sunflower: ["sunflower", "sans-serif"].join(", "),
  BebasNeue: ["Bebas Neue", "cursive"].join(", "),
  Roboto: ["Roboto", "sans-serif"].join(", "),
  Pacifico: ["Pacifico", "cursive"].join(", "),
};

const GoogleFontsLinks = () => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />

      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />

      <link
        href="https://fonts.googleapis.com/css2?display=swap&family=Bebas+Neue&family=Roboto:wght@500;900&family=Pacifico&family=IBM+Plex+Mono:wght@500&family=Special+Elite"
        rel="stylesheet"
      />
    </>
  );
};

const AdobeWebProjectFontsLinks = () => {
  return (
    <>
      <link rel="stylesheet" href="https://use.typekit.net/luu8plf.css" />
    </>
  );
};

const SelfHostedFontsLinks = () => {
  return (
    <>
      <link rel="stylesheet" href="fonts/self-hosted-fonts.css" />
    </>
  );
};

export const FontLinks = () => {
  return (
    <>
      <AdobeWebProjectFontsLinks />
      <GoogleFontsLinks />
      <SelfHostedFontsLinks />
    </>
  );
};
