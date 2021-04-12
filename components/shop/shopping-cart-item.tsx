import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { MdDelete } from "react-icons/md";
import { Avatar } from "../shared/avatar";
import { QuantityInput } from "./quantity-input";
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
}: {
  onIncrement: () => void;
  onDecrement: () => void;
  onRemove: () => void;
  item: IShoppingCartItem;
}) => {
  return (
    <Box paddingY={1}>
      <Box display="flex" alignItems="center">
        <Box marginRight={1}>
          <Avatar src={item.variant.product.image} />
        </Box>
        <Box>
          <Typography variant="h6">{item.variant.name}</Typography>
          <Typography color="textSecondary">{`${item.variant.retailPrice} ${item.variant.currency}`}</Typography>
        </Box>
      </Box>

      <Box display="flex" justifyContent="space-between">
        <QuantityInput
          upperBound={ITEM_QUANTITY_UPPER_BOUND}
          lowerBound={ITEM_QUANTITY_LOWER_BOUND}
          quantity={item.quantity}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
        <Button size="small" startIcon={<MdDelete />} onClick={onRemove}>
          Remove
        </Button>
      </Box>
    </Box>
  );
};
