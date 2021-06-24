import { useRouter } from "next/router";
import { useEffect } from "react";

export const useRouterHandlers = ({
  onRouteChangeComplete,
}: {
  onRouteChangeComplete: () => void;
}) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeComplete = () => {
      onRouteChangeComplete();
    };

    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, []);
};
