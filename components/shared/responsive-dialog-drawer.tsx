import { ModalProps } from "@material-ui/core/Modal";
import Drawer, { DrawerProps } from "@material-ui/core/Drawer";
import Dialog, { DialogProps } from "@material-ui/core/Dialog";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core";

export const ResponsiveDialogDrawer = ({
  DrawerProps,
  DialogProps,
  ...ModalProps
}: ModalProps & { DrawerProps?: DrawerProps; DialogProps?: DialogProps }) => {
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));

  if (isSmallScreen) {
    return <Drawer anchor="bottom" {...ModalProps} {...DrawerProps} />;
  }

  return <Dialog {...ModalProps} {...DialogProps} />;
};
