import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import { Avatar } from "../shared/avatar";
import { IShoppingCartItem } from "./shopping-cart-state";

export const ShoppingCartItemListItem = ({
  shoppingCartItem,
}: {
  shoppingCartItem: IShoppingCartItem;
}) => {
  return (
    <ListItem button>
      <ListItemAvatar>
        <Avatar src={shoppingCartItem.variant.product.image} />
      </ListItemAvatar>
      <ListItemText
        primary={shoppingCartItem.variant.name}
        secondary={`${shoppingCartItem.variant.retailPrice} ${shoppingCartItem.variant.currency}`}
      />
    </ListItem>
  );
};
