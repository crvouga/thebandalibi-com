import { Button, Image, QuantityInput } from "@components/generic";
import { ILineItem, ILineItemUpdate, priceToString } from "@data-access";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { NaturalNumber } from "@utility";
import React from "react";

export const LineItemCard = ({
  lineItem,
  isDeleting = false,
  onDelete,
  onUpdate,
}: {
  lineItem: ILineItem;
  isDeleting?: boolean;
  onDelete?: (lineItem: ILineItem) => void;
  onUpdate?: (update: ILineItemUpdate) => void;
}) => {
  return (
    <Box
      paddingY={1}
      display="flex"
      flexDirection="row"
      width="100%"
      alignItems="center"
      style={{ opacity: isDeleting ? 0.5 : 1 }}
    >
      <Box width="100px" marginRight={1}>
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
            color="inherit"
            loading={isDeleting}
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
