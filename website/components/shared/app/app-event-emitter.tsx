import { createEventEmitter, IEventEmitter } from "@utility";
import { useRouter } from "next/router";
import { useEffect } from "react";

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
  "set-theme": {
    mode: "light" | "dark" | "system";
  };
};

export const useRouterEvents = ({
  eventEmitter,
}: {
  eventEmitter: IEventEmitter<IAppEvents>;
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
};

export const appEventEmitter = createEventEmitter<IAppEvents>({
  maxListeners: 1000,
});
