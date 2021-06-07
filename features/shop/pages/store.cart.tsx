import { ISettings } from "@data-access";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import { Button } from "@ui";
import { useRouter } from "next/router";
import React from "react";
import { PageLayout } from "../../../components/app/layout";
import { routes } from "../../../routes";
import { ShoppingCartEmpty } from "../shopping-cart-empty";
import { ShoppingCartItem } from "../shopping-cart-item";
import { useShoppingCartState } from "../shopping-cart-state";

export type IShopCartProps = {
  settings: ISettings;
};

export const ShopCart = (props: IShopCartProps) => {
  const { settings } = props;
  const {
    itemList,
    incrementItem,
    decrementItem,
    removeItem,
  } = useShoppingCartState();

  const router = useRouter();

  return (
    <PageLayout hideFooter pageTitle={["Shopping Cart"]} settings={settings}>
      <Container maxWidth="sm">
        <Box paddingY={1}>
          <Typography variant="h2">Shopping Cart</Typography>
        </Box>

        <Button
          fullWidth
          color="primary"
          size="large"
          variant="contained"
          disabled={itemList.length === 0}
          href={routes.checkout()}
        >
          Proceed to Checkout
        </Button>

        {itemList.length === 0 && <ShoppingCartEmpty />}

        <List>
          {itemList.map((item) => (
            <>
              <ShoppingCartItem
                key={item.variant.id}
                item={item}
                onClick={() => {
                  router.push(routes.singleProduct(item.variant.productId));
                }}
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
              <Divider />
            </>
          ))}
        </List>
      </Container>
    </PageLayout>
  );
};
