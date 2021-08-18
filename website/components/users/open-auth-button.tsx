import { Avatar } from "@components/generic";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import IconButton from "@material-ui/core/IconButton";
import ButtonBase from "@material-ui/core/ButtonBase";
import { useAuthStateContext } from "./auth-state";
import { appEventEmitter } from "@components/shared";
import { useTheme } from "@material-ui/core";

export const OpenAuthButton = () => {
  const theme = useTheme();
  const authState = useAuthStateContext();

  if (authState.status === "loading") {
    return <CircularProgress color="inherit" sx={{ p: 1 / 2 }} />;
  }

  if (authState.status === "authenticated") {
    return (
      <Avatar
        onClick={() => {
          appEventEmitter.emit("open-auth", {});
        }}
        alt={"user photo"}
        src={authState?.user?.photoUrl}
      />
    );
  }

  return (
    <Button
      variant="contained"
      color="inherit"
      size="small"
      onClick={() => {
        appEventEmitter.emit("open-auth", {});
      }}
    >
      Sign In
    </Button>
  );
};
