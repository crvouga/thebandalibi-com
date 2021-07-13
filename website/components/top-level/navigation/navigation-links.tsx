import { Button } from "@components/generic";
import Box from "@material-ui/core/Box";
import { useEventEmitter } from "@utility";
import { useState } from "react";
import { useAppEventEmitter } from "../app";

export const NavigationLink = ({
  pathname,
  label,
}: {
  label: string;
  pathname: string;
  selected?: boolean;
}) => {
  const appEventEmitter = useAppEventEmitter();

  const [state, setState] = useState<"idle" | "loading">("idle");

  useEventEmitter(appEventEmitter, {
    "route-changed-started": (payload) => {
      if (payload.pathname === pathname) {
        setState("loading");
      }
    },
    "route-changed-completed": () => {
      setState("idle");
    },
  });

  return (
    <Button
      loading={state === "loading"}
      color="inherit"
      size="large"
      href={pathname}
    >
      {label}
    </Button>
  );
};

export const NavigationLinks = ({
  links,
  selectedPathname,
  orientation = "vertical",
}: {
  orientation?: "vertical" | "horizontal";
  selectedPathname?: string;
  links: { pathname: string; label: string }[];
}) => {
  return (
    <Box
      sx={{
        paddingY: 1,
        display: "flex",
        flexDirection: orientation === "vertical" ? "column" : "row",
      }}
    >
      {links.map((link) => (
        <NavigationLink
          key={link.pathname}
          selected={link.pathname === selectedPathname}
          {...link}
        />
      ))}
    </Box>
  );
};
