import IconButton, { IconButtonProps } from "@material-ui/core/IconButton";
import { MdClose } from "react-icons/md";

export const CloseButton = (props: IconButtonProps) => {
  return (
    <IconButton aria-label="close" {...props}>
      <MdClose />
    </IconButton>
  );
};
