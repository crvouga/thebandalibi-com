import { Button, Image, QuantityInput } from "@components/generic";
import { ILineItem, ILineItemUpdate, priceToString } from "@data-access";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { NaturalNumber } from "@utility";
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
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Typography align="left">{lineItem.productName}</Typography>
            <Typography variant="subtitle2" align="left">
              {lineItem.variantName}
            </Typography>
          </Box>
          <Box>
            <Typography align="left">
              {priceToString({
                ...lineItem.price,
                amount: lineItem.price.amount * lineItem.quantity,
              })}
            </Typography>
          </Box>
        </Box>

        <Box display="flex" alignItems="center" justifyItems="space-between">
          <Button
            size="small"
            color="inherit"
            disabled={!canDelete}
            loading={isDeleting}
            startIcon={<MdDelete />}
            onClick={() => {
              onDelete?.(lineItem);
            }}
          >
            Remove
          </Button>

          <Box flex={1} />

          <QuantityInput
            quantity={lineItem.quantity}
            onDecrement={() => {
              onUpdate?.({
                ...lineItem,
                quantity: NaturalNumber(lineItem.quantity - 1),
              });
            }}
            onIncrement={() => {
              onUpdate?.({
                ...lineItem,
                quantity: NaturalNumber(lineItem.quantity + 1),
              });
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
