import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { MdDelete } from "react-icons/md";
import { ISettings } from "../../lib/data-access";
import { PageLayout } from "../app/layout";
import { DocumentTitle } from "../app/meta";
import { Avatar } from "../shared/avatar";
import { useShoppingCartState } from "../shop/shopping-cart-state";

export type IShopCartProps = {
  settings: ISettings;
};

export const Empty = () => {
  return (
    <Box paddingY={12}>
      <Typography variant="h5" color="textSecondary" align="center">
        Your shopping cart is empty
      </Typography>
    </Box>
  );
};

export const ShopCart = (props: IShopCartProps) => {
  const { settings } = props;
  const { items, removeItem } = useShoppingCartState();
  return (
    <PageLayout
      title={DocumentTitle(settings.band.name, "Shopping Cart")}
      settings={settings}
      hideFooter
    >
      <Container maxWidth="sm">
        <Box paddingY={2}>
          <Typography variant="h4">Shopping Cart</Typography>
        </Box>

        <Button fullWidth size="large" variant="contained">
          Proceed to Checkout
        </Button>

        {items.length === 0 && <Empty />}

        <List>
          {items.map((item) => (
            <ListItem key={item.id} button>
              <ListItemAvatar>
                <Avatar src={item.variant.product.image} />
              </ListItemAvatar>
              <ListItemText
                primary={item.variant.name}
                secondary={`${item.variant.retailPrice} ${item.variant.currency}`}
              />
              <ListItemSecondaryAction>
                <IconButton
                  aria-label="remove item"
                  onClick={() => {
                    removeItem({ id: item.id });
                  }}
                >
                  <MdDelete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Container>
    </PageLayout>
  );
};
