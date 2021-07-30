import { useEffect } from "react";
import { useFontLoadingState } from "./font-loading-state";
import classes from "./font-loading.module.css";

export const useFontLoading = () => {
  const fontLoadingState = useFontLoadingState();

  useEffect(() => {
    if (fontLoadingState === "loading") {
      document.body.classList.add(classes.hideFonts);
      return;
    }

    document.body.classList.remove(classes.hideFonts);
  }, [fontLoadingState]);
};
