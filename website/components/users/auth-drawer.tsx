import { Button, CloseIconButton } from "@components/generic";
import { IAuthEvents, IRouterEvents } from "@components/shared";
import { LABELS } from "@config";
import { useTheme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import { IEventEmitter, useBreakpointDown, useEventEmitter } from "@utility";
import React, { useState } from "react";
import { AuthForm } from "./auth-form";
import { useAuthStateContext, useSignOut } from "./auth-state";

const AuthDrawerHeader = ({
  title,
  onClose,
}: {
  title: string;
  onClose: () => void;
}) => {
  return (
    <Box
      sx={{
        p: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: 1,
      }}
    >
      <Typography variant="h3">{title}</Typography>

      <CloseIconButton onClick={onClose} />
    </Box>
  );
};

export const AuthDrawer = ({
  eventEmitter,
}: {
  eventEmitter: IEventEmitter<IAuthEvents & IRouterEvents>;
}) => {
  const authState = useAuthStateContext();

  const [state, setState] = useState<"closed" | "opened">("closed");

  useEventEmitter(eventEmitter, {
    "open-auth": () => {
      setState("opened");
    },
    "close-auth": () => {
      setState("closed");
    },
    "route-changed-completed": () => {
      setState("closed");
    },
  });

  const handleClose = () => {
    eventEmitter.emit("close-auth", {});
  };

  const signOut = useSignOut();

  const currentBreakpointDown = useBreakpointDown();

  const anchor = currentBreakpointDown === "sm" ? "bottom" : "right";

  const theme = useTheme();

  return (
    <Drawer
      open={state === "opened"}
      onClose={handleClose}
      anchor={anchor}
      sx={{
        "& .MuiDrawer-paper": {
          margin: "auto",
          width: "100vw",
          maxWidth: theme.breakpoints.values.sm,
        },
      }}
    >
      {authState.status === "authenticated" && (
        <>
          <AuthDrawerHeader title="You" onClose={handleClose} />
          <Box sx={{ m: 2 }}>
            <Button
              variant="contained"
              loading={signOut.status === "loading"}
              fullWidth
              onClick={() => {
                handleClose();
                signOut.mutate();
              }}
            >
              Sign Out
            </Button>
          </Box>
        </>
      )}

      {authState.status === "unauthenticated" && (
        <>
          <AuthDrawerHeader
            title={LABELS.authentication}
            onClose={handleClose}
          />

          <Box sx={{ m: 2 }}>
            <AuthForm />
          </Box>
        </>
      )}
    </Drawer>
  );
};
