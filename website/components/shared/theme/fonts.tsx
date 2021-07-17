/* 

Google Fonts:

https://fonts.google.com/

*/

export const Fonts = {
  BebasNeue: ["Bebas Neue", "cursive"].join(", "),
  Roboto: ["Roboto", "sans-serif"].join(", "),
  Pacifico: ["Pacifico", "cursive"].join(", "),
};

const HREF =
  "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:wght@500;900&family=Pacifico&display=swap";

const FontLink = ({ href }: { href: string }) => {
  return (
    <>
      <link href={href} rel="preload" as="style" />
      <link href={href} rel="stylesheet" />
    </>
  );
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
      <FontLink href={HREF} />
    </>
  );
};
