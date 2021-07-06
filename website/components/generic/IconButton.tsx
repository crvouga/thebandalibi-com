import MuiIconButton, { IconButtonProps } from "@material-ui/core/IconButton";
import CircularProgress from "@material-ui/core/CircularProgress";

export const IconButton = ({
  children,
  loading,
  ...props
}: IconButtonProps & { loading?: boolean }) => {
  return (
    <MuiIconButton {...props}>
      {loading ? <CircularProgress size="1em" color="inherit" /> : children}
    </MuiIconButton>
  );
};
