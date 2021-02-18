import { useEffect, useRef, useState } from "react";
import { IController } from "./contracts";

export const useHorizontalScrollController = (): IController => {
  const ref = useRef<HTMLDivElement | null>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const getScrollWidth = () => {
    return ref.current ? ref.current.scrollWidth : 0;
  };

  const getScrollLeft = () => {
    return ref.current ? ref.current.scrollLeft : 0;
  };

  const updateScrollFlags = (nextScrollLeft: number) => {
    setCanScrollLeft(nextScrollLeft > 0);
    setCanScrollRight(nextScrollLeft < getScrollWidth());
  };

  const scrollLeft = () => {
    if (ref.current) {
      const nextLeft = getScrollLeft() - 200;

      updateScrollFlags(nextLeft);

      ref.current.scroll({
        behavior: "smooth",
        left: nextLeft,
      });
    }
  };

  const scrollRight = () => {
    if (ref.current) {
      const nextLeft = getScrollLeft() + 200;

      updateScrollFlags(nextLeft);

      if (nextLeft)
        ref.current.scroll({
          behavior: "smooth",
          left: nextLeft,
        });
    }
  };

  useEffect(() => {
    updateScrollFlags(getScrollLeft());
  }, []);

  return {
    ref,
    scrollLeft,
    scrollRight,
    canScrollLeft,
    canScrollRight,
  };
};
