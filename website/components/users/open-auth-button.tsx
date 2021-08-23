import { Avatar } from "@components/generic";
import { appEventEmitter } from "@components/shared";
import { CALL_TO_ACTIONS } from "@config";
import Button from "@material-ui/core/Button";
import ButtonBase from "@material-ui/core/ButtonBase";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useAuthStateContext } from "./auth-state";

export const OpenAuthButton = () => {
  const { status, user } = useAuthStateContext();

  if (status === "loading") {
    return <CircularProgress color="inherit" sx={{ p: 1 / 2 }} />;
  }

  if (status === "authenticated") {
    return (
      <ButtonBase sx={{ borderRadius: "50%" }}>
        <Avatar
          onClick={() => {
            appEventEmitter.emit("open-auth", {});
          }}
          alt={"user photo"}
          sx={{
            backgroundColor: "#fff",
          }}
          src={user?.photoUrl}
        />
      </ButtonBase>
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
      {CALL_TO_ACTIONS.authenticate}
    </Button>
  );
};
