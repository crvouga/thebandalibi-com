import { Button } from "@components/generic";
import { useTheme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";

export const EmailListFormSuccessDialog = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const theme = useTheme();
  return (
    <Dialog open={open} onClose={onClose}>
      <Box
        sx={{
          p: 2,
        }}
      >
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          color="success.main"
        >
          Success
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          Thank you for subscribing to our email list!
        </Typography>
      </Box>
      <DialogActions>
        <Button onClick={onClose} color="inherit">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
