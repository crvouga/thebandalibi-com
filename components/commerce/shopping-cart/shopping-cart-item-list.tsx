import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import { IShoppingCartItem } from "./shopping-cart-state";

export const ShoppingCartItemListItem = ({
  shoppingCartItem,
}: {
  shoppingCartItem: IShoppingCartItem;
}) => {
  return (
    <ListItem button>
      <ListItemText primary={shoppingCartItem.variant.name} />
    </ListItem>
  );
};
