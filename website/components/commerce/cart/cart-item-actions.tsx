import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import { MdAdd, MdDeleteForever, MdRemove } from "react-icons/md";

export const CartItemActions = ({
  onIncrement,
  onDecrement,
  onRemove,
  disabled = false,
}: {
  onIncrement: () => void;
  onDecrement: () => void;
  onRemove: () => void;
  disabled?: boolean;
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
        <IconButton onClick={onDecrement} disabled={disabled}>
          <MdRemove />
        </IconButton>

        <IconButton onClick={onIncrement} disabled={disabled}>
          <MdAdd />
        </IconButton>
      </Box>

      <IconButton disabled={disabled} onClick={onRemove}>
        <MdDeleteForever />
      </IconButton>
    </Box>
  );
};
