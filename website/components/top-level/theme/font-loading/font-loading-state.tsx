import { useEffect, useState } from "react";

export const useFontLoadingState = () => {
  const [state, setState] = useState<"loading" | "loaded">("loading");

  useEffect(() => {
    //@ts-ignore
    document.fonts.ready.finally(() => {
      setState("loaded");
    });
  }, []);

  return state;
};
