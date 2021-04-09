import { makeStyles } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import { SlideUp } from "../shared/transitions";
import { ShoppingCartItemListItem } from "./shopping-cart-item-list";
import { useShoppingCartState } from "./shopping-cart-state";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "100%",
    maxWidth: theme.breakpoints.width("sm"),
    margin: 0,
    top: "auto",
    bottom: 0,
    position: "absolute",
    maxHeight: "50vh",
  },
}));

export const ShoppingCartModal = () => {
  const classes = useStyles();
  const shoppingCartState = useShoppingCartState();

  return (
    <Dialog
      fullWidth
      TransitionComponent={SlideUp}
      open={shoppingCartState.modalState === "opened"}
      onClose={() => {
        shoppingCartState.setModalState("closed");
      }}
      classes={{ paper: classes.paper }}
    >
      <Button size="large" variant="contained" fullWidth>
        Proceed To Checkout
      </Button>

      <List>
        {shoppingCartState.items.map((shoppingCartItem) => (
          <ShoppingCartItemListItem
            key={shoppingCartItem.variant.id}
            shoppingCartItem={shoppingCartItem}
          />
        ))}
      </List>
    </Dialog>
  );
};
