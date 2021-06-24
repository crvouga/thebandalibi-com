import { useEffect, useState } from "react";

export const useIsFontsLoaded = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const run = async () => {
      if (typeof window === "undefined") {
        return;
      }

      //@ts-ignore
      await document.fonts.ready;

      setIsLoaded(true);
    };

    run();
  });

  return isLoaded;
};
