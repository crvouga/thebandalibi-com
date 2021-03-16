import { useEffect, useState } from "react";

/*

why? prevent resize when mobile nav bar shrinks on scroll

*/

export const useHeroHeight = () => {
  const [height, setHeight] = useState("100vh");

  useEffect(() => {
    setHeight(`${window.innerHeight}px`);
  }, []);

  return height;
};
