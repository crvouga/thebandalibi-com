import panzoom from "panzoom";
import { useEffect, useRef } from "react";

export const usePanZoom = <
  TPanzoomElement extends HTMLElement,
  TCenteredElement extends HTMLElement
>() => {
  const instanceRef = useRef<ReturnType<typeof panzoom> | null>(null);

  const panzoomRef = useRef<TPanzoomElement | null>(null);
  const centeredRef = useRef<TCenteredElement | null>(null);

  useEffect(() => {
    if (panzoomRef.current) {
      instanceRef.current = panzoom(panzoomRef.current, {});
    }

    return () => {
      if (instanceRef.current) {
        instanceRef.current.dispose();
      }
    };
  }, []);

  const center = () => {
    if (panzoomRef.current && centeredRef.current && instanceRef.current) {
      const centerX =
        panzoomRef.current.offsetWidth / 2 -
        centeredRef.current.offsetWidth / 2;

      instanceRef.current.moveTo(centerX, 48);
    }
  };

  return {
    panzoomRef,
    centeredRef,
    center,
  };
};
