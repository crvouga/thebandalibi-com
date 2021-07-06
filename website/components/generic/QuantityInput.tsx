import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import { clamp } from "@utility";
import { useCallback, useEffect, useState } from "react";
import { MdAdd, MdRemove } from "react-icons/md";

type IQuantityInputConfig = {
  upperBound: number;
  lowerBound: number;
};

type IQuantityInputProps = {
  upperBound?: number;
  lowerBound?: number;
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

export const useQuantityInputState = ({
  upperBound,
  lowerBound,
  initialQuantity,
  onChange,
}: IQuantityInputConfig & {
  initialQuantity: number;
  onChange: (quantity: number) => void;
}): IQuantityInputProps => {
  const [quantity, setQuantity] = useState<number>(
    clamp(lowerBound, upperBound, initialQuantity)
  );

  const onIncrement = () => {
    setQuantity((_) => clamp(lowerBound, upperBound, _ + 1));
  };

  const onDecrement = () => {
    setQuantity((_) => clamp(lowerBound, upperBound, _ - 1));
  };

  useEffect(() => {
    return onChange(quantity);
  }, [quantity]);

  return {
    quantity,
    onDecrement,
    onIncrement,
    upperBound,
    lowerBound,
  };
};

export const QuantityInput = ({
  quantity,
  onIncrement,
  onDecrement,
  loading = false,
  disabled = false,
  upperBound = Infinity,
  lowerBound = -Infinity,
}: IQuantityInputProps & { loading?: boolean; disabled?: boolean }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      color={disabled ? "action.disabled" : undefined}
    >
      <IconButton
        aria-label="decrement"
        onClick={() => onDecrement()}
        disabled={quantity <= lowerBound || disabled}
      >
        <MdRemove />
      </IconButton>

      <Box marginX={1} width="1em">
        <Typography
          align="center"
          color="inherit"
          variant="h6"
          style={{
            userSelect: "none",
          }}
        >
          {loading ? (
            <CircularProgress size="0.9em" color="inherit" />
          ) : (
            quantity
          )}
        </Typography>
      </Box>

      <IconButton
        aria-label="increment"
        onClick={() => onIncrement()}
        disabled={quantity >= upperBound || disabled}
      >
        <MdAdd />
      </IconButton>
    </Box>
  );
};
