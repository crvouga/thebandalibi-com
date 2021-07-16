import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import { MdAdd, MdDeleteForever, MdRemove } from "react-icons/md";

export const CartItemActions = ({
  onIncrement,
  onDecrement,
  onRemove,
  disabled,
  incrementDisabled,
  decrementDisabled,
  deleteDisabled,
}: {
  onIncrement: () => void;
  onDecrement: () => void;
  onRemove: () => void;
  disabled?: boolean;
  decrementDisabled?: boolean;
  incrementDisabled?: boolean;
  deleteDisabled?: boolean;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <IconButton
          onClick={onDecrement}
          disabled={disabled || decrementDisabled}
        >
          <MdRemove />
        </IconButton>

        <IconButton
          onClick={onIncrement}
          disabled={disabled || incrementDisabled}
        >
          <MdAdd />
        </IconButton>
      </Box>

      <IconButton onClick={onRemove} disabled={disabled || deleteDisabled}>
        <MdDeleteForever />
      </IconButton>
    </Box>
  );
};
