import IconButton, { IconButtonProps } from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

export const CloseIconButton = (props: IconButtonProps) => {
  return (
    <IconButton aria-label="close" {...props}>
      <CloseIcon />
    </IconButton>
  );
};
