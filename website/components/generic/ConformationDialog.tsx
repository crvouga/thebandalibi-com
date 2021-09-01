import Button from "@material-ui/core/Button";
import Dialog, { DialogProps } from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";

export const ConformationDialog = ({
  title,
  confirmTitle,
  onConfirm,
  onCancel,
  ...props
}: DialogProps & {
  title: string;
  confirmTitle: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}) => {
  return (
    <Dialog {...props}>
      <DialogTitle id={title}>{title}</DialogTitle>
      <DialogActions>
        <Button color="inherit" onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={onConfirm} variant="contained">
          {confirmTitle}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
