import { useEffect, useState } from "react";

/*

what?
prevent resize when the mobile nav bar shrinks on scroll

why? 
this prevents gitter when scrolling in the instagram web view

*/

export const useHeroHeight = () => {
  const [height, setHeight] = useState("100vh");

  useEffect(() => {
    setHeight(`${window.innerHeight}px`);
  }, []);

  return height;
};
