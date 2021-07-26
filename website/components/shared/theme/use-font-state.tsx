import { useEffect, useState } from "react";

export type IFontState = "loading" | "loaded";

export const useFontsState = () => {
  const [state, setState] = useState<IFontState>("loading");

  useEffect(() => {
    //@ts-ignore
    document.fonts.ready.finally(() => {
      setState("loaded");
    });
  }, []);

  return state;
};
