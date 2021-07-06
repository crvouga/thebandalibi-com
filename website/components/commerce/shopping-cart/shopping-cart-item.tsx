import {
  IconButton,
  Image,
  QuantityInput,
  useQuantityInputState,
} from "@components/generic";
import { ILineItem, priceToString } from "@data-access";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { MdDelete } from "react-icons/md";

export const ShoppingCartItem = ({
  lineItem,
  isDeleting = false,
  onDelete,
  canDelete = false,
}: {
  lineItem: ILineItem;
  canDelete?: boolean;
  isDeleting?: boolean;
  onDelete: (lineItem: ILineItem) => void;
}) => {
  const quantityInputState = useQuantityInputState({
    initialQuantity: lineItem.quantity,
    lowerBound: 1,
    upperBound: Infinity,
  });

  return (
    <Box
      paddingY={1}
      display="flex"
      flexDirection="row"
      alignItems="center"
      width="100%"
      style={{ opacity: isDeleting ? 0.5 : 1 }}
    >
      <Box width="80px" marginRight={1}>
        <Image
          aspectRatio={1}
          src={lineItem.image.src}
          alt={lineItem.image.alt}
        />
      </Box>

      <Box display="flex" flexDirection="column" flex={1}>
        <Typography align="left">{`${lineItem.variantName} • ${lineItem.productName}`}</Typography>
        <Typography variant="subtitle2" align="left">
          {priceToString(lineItem.price)}
        </Typography>
      </Box>

      <Box marginLeft={1} display="flex" alignItems="center">
        <QuantityInput {...quantityInputState} />
        <IconButton
          disabled={!canDelete}
          loading={isDeleting}
          onClick={() => {
            onDelete(lineItem);
          }}
        >
          <MdDelete />
        </IconButton>
      </Box>
    </Box>
  );
};
