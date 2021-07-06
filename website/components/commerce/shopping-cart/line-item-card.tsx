import {
  IconButton,
  Image,
  QuantityInput,
  useQuantityInputState,
} from "@components/generic";
import { ILineItem, ILineItemUpdate, priceToString } from "@data-access";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { MdDelete } from "react-icons/md";

export const LineItemCard = ({
  lineItem,
  isDeleting = false,
  onDelete,
  canDelete = false,
  canUpdate,
  isUpdating,
  onUpdate,
}: {
  lineItem: ILineItem;
  canDelete?: boolean;
  isDeleting?: boolean;
  onDelete?: (lineItem: ILineItem) => void;
  canUpdate?: boolean;
  isUpdating?: boolean;
  onUpdate?: (update: ILineItemUpdate) => void;
}) => {
  const quantityInputState = useQuantityInputState({
    initialQuantity: lineItem.quantity,
    lowerBound: 1,
    upperBound: Infinity,
    onChange: (quantity) => {
      onUpdate?.({
        lineItemId: lineItem.lineItemId,
        quantity,
      });
    },
  });

  return (
    <Box
      paddingY={1}
      display="flex"
      flexDirection="row"
      width="100%"
      style={{ opacity: isDeleting ? 0.5 : 1 }}
    >
      <Box width="120px" marginRight={1}>
        <Image
          aspectRatio={1}
          src={lineItem.image.src}
          alt={lineItem.image.alt}
        />
      </Box>

      <Box display="flex" flexDirection="column" flex={1}>
        <Typography align="left">{lineItem.productName}</Typography>
        <Typography variant="subtitle2" align="left">
          {lineItem.variantName}
        </Typography>
        <Box marginLeft={1} display="flex" alignItems="center">
          <QuantityInput
            disabled={!canUpdate}
            loading={isUpdating}
            {...quantityInputState}
          />

          <IconButton
            disabled={!canDelete}
            loading={isDeleting}
            onClick={() => {
              onDelete?.(lineItem);
            }}
          >
            <MdDelete />
          </IconButton>
        </Box>
      </Box>

      <Box>
        <Typography align="left">{priceToString(lineItem.price)}</Typography>
      </Box>
    </Box>
  );
};
