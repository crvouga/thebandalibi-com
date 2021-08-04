import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import { MdAdd, MdDeleteForever, MdRemove } from "react-icons/md";

type IProps = {
  onIncrement?: () => void;
  onDecrement?: () => void;
  onRemove?: () => void;
  disabled?: boolean;
  decrementDisabled?: boolean;
  incrementDisabled?: boolean;
  deleteDisabled?: boolean;
};

export const CartItemActions = (props: IProps) => {
  const {
    onIncrement,
    onDecrement,
    onRemove,
    disabled,
    incrementDisabled,
    decrementDisabled,
    deleteDisabled,
  } = props;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex" }}>
        {onDecrement && (
          <IconButton
            onClick={onDecrement}
            disabled={disabled || decrementDisabled}
          >
            <MdRemove />
          </IconButton>
        )}

        {onIncrement && (
          <IconButton
            onClick={onIncrement}
            disabled={disabled || incrementDisabled}
          >
            <MdAdd />
          </IconButton>
        )}
      </Box>

      {onRemove && (
        <IconButton onClick={onRemove} disabled={disabled || deleteDisabled}>
          <MdDeleteForever />
        </IconButton>
      )}
    </Box>
  );
};
