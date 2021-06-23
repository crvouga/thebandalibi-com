import { IProductVariant } from "@data-access";
import Box from "@material-ui/core/Box";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { Avatar, Button, ResponsiveDialogDrawer } from "generic-components";
import { MdCheckCircle } from "react-icons/md";
import { routes } from "lib";

export const AddedToCartModal = ({
  open,
  onClose,
  variant,
}: {
  open: boolean;
  onClose: () => void;
  variant: IProductVariant;
}) => {
  return (
    <ResponsiveDialogDrawer open={open} onClose={onClose}>
      <Box p={2}>
        <Box
          color="success.main"
          display="flex"
          flexDirection="row"
          alignItems="center"
        >
          <Box marginRight={1} width="28px" height="28px">
            <MdCheckCircle style={{ width: "100%", height: "100%" }} />
          </Box>
          <Typography variant="h4">Added to Cart</Typography>
        </Box>

        <ListItem disableGutters>
          <ListItemAvatar>
            <Avatar src={variant.product.image} />
          </ListItemAvatar>
          <ListItemText
            primary={variant.name}
            secondary={variant.retailPrice}
          />
        </ListItem>

        <Box paddingBottom={1}>
          <Button
            href={routes.shoppingCart()}
            size="large"
            variant="contained"
            fullWidth
          >
            Proceed To Checkout
          </Button>
        </Box>

        <Button
          href={routes.shoppingCart()}
          size="large"
          variant="outlined"
          fullWidth
        >
          View Cart
        </Button>
      </Box>
    </ResponsiveDialogDrawer>
  );
};
