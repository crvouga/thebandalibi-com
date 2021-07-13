import { createEventEmitter } from "@utility";
import { useRouter } from "next/router";
import React, { createContext, useContext, useEffect } from "react";

type IAppEvents = {
  "open-cart": {};
  "close-cart": {};
  "open-navigation": {};
  "close-navigation": {};
  "route-changed-started": {
    pathname: string;
  };
  "route-changed-completed": {
    pathname: string;
  };
};

const eventEmitter = createEventEmitter<IAppEvents>();

const AppEventEmitterContext = createContext<typeof eventEmitter>(eventEmitter);

export const AppEventEmitterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeComplete = (pathname: string) => {
      eventEmitter.emit("route-changed-completed", {
        pathname,
      });
    };

    const handleRouteChangeStart = (pathname: string) => {
      eventEmitter.emit("route-changed-started", {
        pathname,
      });
    };

    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    router.events.on("routeChangeStart", handleRouteChangeStart);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, []);

  return (
    <AppEventEmitterContext.Provider value={eventEmitter}>
      {children}
    </AppEventEmitterContext.Provider>
  );
};

export const useAppEventEmitter = () => {
  return useContext(AppEventEmitterContext);
};
