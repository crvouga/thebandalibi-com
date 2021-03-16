import { useEffect, useState } from "react";

/*

what?
prevent resize when the mobile nav bar shrinks on scroll

why? 
this prevents gitter when scrolling in the instagram web view

*/

export const useHeroHeightStyles = () => {
  const [styles, setStyles] = useState({
    maxHeight: "100%",
    height: "100%",
  });

  useEffect(() => {
    setStyles((styles) => ({
      ...styles,
      height: `${window.innerHeight}px`,
    }));
  }, []);

  return styles;
};
