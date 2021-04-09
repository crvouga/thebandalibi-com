import Box from "@material-ui/core/Box";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { IVariant } from "../../lib/data-access";
import { routes } from "../../lib/routes";
import { Avatar } from "../shared/avatar";
import { ButtonLink } from "../shared/clickable";
import { ResponsiveDialogDrawer } from "../shared/responsive-dialog-drawer";
import { MdCheckCircle } from "react-icons/md";

export const AddedToCartModal = ({
  open,
  onClose,
  variant,
}: {
  open: boolean;
  onClose: () => void;
  variant: IVariant;
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
          <Box marginRight={2} width="24px" height="24px">
            <MdCheckCircle style={{ width: "100%", height: "100%" }} />
          </Box>
          <Typography variant="h5">Added to Cart</Typography>
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
          <ButtonLink
            href={routes.shoppingCart()}
            size="large"
            variant="contained"
            fullWidth
          >
            Proceed To Checkout
          </ButtonLink>
        </Box>

        <ButtonLink
          href={routes.shoppingCart()}
          size="large"
          variant="outlined"
          fullWidth
        >
          View Cart
        </ButtonLink>
      </Box>
    </ResponsiveDialogDrawer>
  );
};
