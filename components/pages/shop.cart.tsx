import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { ISettings } from "../../lib/data-access";
import { PageLayout } from "../app/layout";
import { DocumentTitle } from "../app/meta";
import { useShoppingCartState } from "../shop/shopping-cart-state";

export type IShopCartProps = {
  settings: ISettings;
};

export const ShopCart = (props: IShopCartProps) => {
  const { settings } = props;
  const { items } = useShoppingCartState();
  return (
    <PageLayout
      title={DocumentTitle(settings.band.name, "Shopping Card")}
      settings={settings}
    >
      <Container>
        <Box paddingY={2}>
          <Typography variant="h1">Shopping Cart</Typography>
        </Box>
        <List>
          {items.map((item) => (
            <ListItem>
              <ListItemText primary={item.sku} />
            </ListItem>
          ))}
        </List>
      </Container>
    </PageLayout>
  );
};
