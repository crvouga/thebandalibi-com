import IconButton, { IconButtonProps } from "@material-ui/core/IconButton";
import { MdClose } from "react-icons/md";

export const CloseIconButton = (props: IconButtonProps) => {
  return (
    <IconButton aria-label="close" {...props}>
      <MdClose />
    </IconButton>
  );
};
