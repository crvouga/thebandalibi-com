import { useEventEmitter } from "@utility";
import { useState } from "react";
import { useAppEventEmitter } from "../app-wrapper";

export const useSelectedPathname = () => {
  const [selectedPathname, setSelectedPathname] = useState<
    string | undefined
  >();

  const routerEventEmitter = useAppEventEmitter();

  useEventEmitter(routerEventEmitter, {
    "route-changed-completed": ({ pathname }) => {
      setSelectedPathname(pathname);
    },
  });

  return selectedPathname;
};
