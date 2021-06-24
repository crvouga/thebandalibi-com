/* 

Google Fonts:

https://fonts.google.com/

*/

export const Fonts = {
  BebasNeue: ["Bebas Neue", "Helvetica"].join(", "),
  Roboto: ["Roboto", "Helvetica"].join(", "),
  MajorMonoDisplay: ["Major Mono Display"].join(", "),
  RobotoMono: ["Roboto Mono"].join(", "),
  RubikMonoOne: ["Rubik Mono One"].join(", "),
};

const HREF =
  "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Major+Mono+Display&family=Roboto+Mono:ital,wght@0,700;1,700&family=Roboto:wght@500;900&family=Rubik+Mono+One&display=swap";

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
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <FontLink href={HREF} />
    </>
  );
};
