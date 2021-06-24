import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import { Avatar, QuantityInput } from "generic-components";
import React from "react";
import {
  IShoppingCartItem,
  ITEM_QUANTITY_LOWER_BOUND,
  ITEM_QUANTITY_UPPER_BOUND,
} from "./shopping-cart-state";

export const ShoppingCartItem = ({
  item,
  onIncrement,
  onDecrement,
  onRemove,
  onClick,
}: {
  onClick: () => void;
  onIncrement: () => void;
  onDecrement: () => void;
  onRemove: () => void;
  item: IShoppingCartItem;
}) => {
  return (
    <Box paddingY={1}>
      <CardActionArea onClick={onClick}>
        <Box display="flex" alignItems="center">
          <Box marginRight={1}>
            {/* <Avatar src={item.variant.product.image} /> */}
          </Box>
          <Box>
            <Typography variant="h6">{item.variant.name}</Typography>
            {/* <Typography color="textSecondary">{`${item.variant.retailPrice} ${item.variant.currency}`}</Typography> */}
          </Box>
        </Box>
      </CardActionArea>

      <Box display="flex" justifyContent="space-between">
        <QuantityInput
          upperBound={ITEM_QUANTITY_UPPER_BOUND}
          lowerBound={ITEM_QUANTITY_LOWER_BOUND}
          quantity={item.quantity}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
        <Button size="small" onClick={onRemove}>
          Remove
        </Button>
      </Box>
    </Box>
  );
};
