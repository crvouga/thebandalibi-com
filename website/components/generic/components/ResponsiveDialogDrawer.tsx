import { useTheme } from "@material-ui/core";
import Dialog, { DialogProps } from "@material-ui/core/Dialog";
import Drawer, { DrawerProps } from "@material-ui/core/Drawer";
import { ModalProps } from "@material-ui/core/Modal";
import { useBreakpointDown } from "../hooks";

export const ResponsiveDialogDrawer = ({
  DrawerProps,
  DialogProps,
  ...ModalProps
}: ModalProps & { DrawerProps?: DrawerProps; DialogProps?: DialogProps }) => {
  const theme = useTheme();

  const breakpointDown = useBreakpointDown();

  if (breakpointDown === "xs") {
    return <Drawer anchor="bottom" {...ModalProps} {...DrawerProps} />;
  }

  return <Dialog {...ModalProps} {...DialogProps} />;
};
