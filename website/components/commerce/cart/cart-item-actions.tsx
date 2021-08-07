import Box from "@material-ui/core/Box";
import IconButton, { IconButtonProps } from "@material-ui/core/IconButton";
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

export const IncrementButton = (props: IconButtonProps) => {
  return (
    <IconButton {...props}>
      <MdAdd />
    </IconButton>
  );
};

export const DecrementButton = (props: IconButtonProps) => {
  return (
    <IconButton {...props}>
      <MdRemove />
    </IconButton>
  );
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
          <DecrementButton
            onClick={onDecrement}
            disabled={disabled || decrementDisabled}
          />
        )}

        {onIncrement && (
          <IncrementButton
            onClick={onIncrement}
            disabled={disabled || incrementDisabled}
          />
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
