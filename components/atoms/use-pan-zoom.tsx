import panzoom from "panzoom";
import { useEffect, useRef } from "react";

export const usePanzoom = <TElement extends HTMLElement>() => {
  const instanceRef = useRef<ReturnType<typeof panzoom> | null>(null);
  const ref = useRef<TElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      instanceRef.current = panzoom(ref.current, {});
    }

    return () => {
      if (instanceRef.current) {
        instanceRef.current.dispose();
      }
    };
  }, []);

  const center = <T extends HTMLElement>(element: T) => {
    if (ref.current && instanceRef.current) {
      const centerX = ref.current.offsetWidth / 2 - element.offsetWidth / 2;

      instanceRef.current.moveTo(centerX, 48);
    }
  };

  const pause = <T extends HTMLElement>(element: T) => {
    if (instanceRef.current) {
      instanceRef.current.pause();
    }
  };

  const resume = <T extends HTMLElement>(element: T) => {
    if (instanceRef.current) {
      instanceRef.current.resume();
    }
  };
  return {
    ref,
    center,
    pause,
    resume,
  };
};
