import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { ISettings } from "../../lib/data-access";
import { PageLayout } from "../app/layout";
import { DocumentTitle } from "../app/meta";
import { ShoppingCartItem } from "./shopping-cart-item";
import { useShoppingCartState } from "./shopping-cart-state";

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
  const {
    itemList,
    incrementItem,
    decrementItem,
    removeItem,
  } = useShoppingCartState();
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

        {itemList.length === 0 && <Empty />}

        <List>
          {itemList.map((item) => (
            <ShoppingCartItem
              item={item}
              onIncrement={() => {
                incrementItem({ variantId: item.variant.id });
              }}
              onDecrement={() => {
                decrementItem({ variantId: item.variant.id });
              }}
              onRemove={() => {
                removeItem({ variantId: item.variant.id });
              }}
            />
          ))}
        </List>
      </Container>
    </PageLayout>
  );
};
