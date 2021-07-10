import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import { MdAdd, MdDeleteForever, MdRemove } from "react-icons/md";

export const LineItemActions = ({
  onIncrement,
  onDecrement,
  onRemove,
  removing = false,
  canDecrement = true,
  canIncrement = true,
}: {
  onIncrement: () => void;
  onDecrement: () => void;
  onRemove: () => void;
  removing?: boolean;
  canDecrement?: boolean;
  canIncrement?: boolean;
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
        <IconButton onClick={onDecrement} disabled={!canDecrement || removing}>
          <MdRemove />
        </IconButton>

        <IconButton onClick={onIncrement} disabled={!canIncrement || removing}>
          <MdAdd />
        </IconButton>
      </Box>

      <IconButton disabled={removing} onClick={onRemove}>
        <MdDeleteForever />
      </IconButton>
    </Box>
  );
};
