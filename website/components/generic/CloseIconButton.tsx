import IconButton, { IconButtonProps } from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { forwardRef } from "react";
import { MdClose } from "react-icons/md";

export const CloseIconButton = forwardRef<
  any,
  IconButtonProps & { label?: string }
>(({ label = "Close", ...props }, ref) => {
  return (
    <Tooltip title={label}>
      <IconButton aria-label={label} ref={ref} {...props}>
        <MdClose />
      </IconButton>
    </Tooltip>
  );
});
