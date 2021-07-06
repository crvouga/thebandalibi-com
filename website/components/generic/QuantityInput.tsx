import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { clamp } from "@utility";
import { useCallback, useState } from "react";
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
}: IQuantityInputConfig & { initialQuantity: number }): IQuantityInputProps => {
  const [quantity, setQuantity] = useState<number>(
    clamp(lowerBound, upperBound, initialQuantity)
  );

  const onIncrement = useCallback(() => {
    setQuantity((_) => clamp(lowerBound, upperBound, _ + 1));
  }, [setQuantity]);

  const onDecrement = useCallback(() => {
    setQuantity((_) => clamp(lowerBound, upperBound, _ - 1));
  }, [setQuantity]);

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
  upperBound = Infinity,
  lowerBound = -Infinity,
}: IQuantityInputProps) => {
  return (
    <Box display="flex" alignItems="center">
      <IconButton
        size="small"
        aria-label="decrement"
        onClick={() => onDecrement()}
        disabled={quantity <= lowerBound}
      >
        <MdRemove />
      </IconButton>

      <Box paddingX={1}>
        <Typography style={{ userSelect: "none" }}>{quantity}</Typography>
      </Box>

      <IconButton
        size="small"
        aria-label="increment"
        onClick={() => onIncrement()}
        disabled={quantity >= upperBound}
      >
        <MdAdd />
      </IconButton>
    </Box>
  );
};
