import { Button, Image } from "@components/generic";
import { ILineItem, ILineItemUpdate, priceToString } from "@data-access";
import Box from "@material-ui/core/Box";
import ButtonGroup from "@material-ui/core/ButtonGroup";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { NaturalNumber } from "@utility";
import React from "react";
import { MdDelete, MdAdd, MdRemove } from "react-icons/md";

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
  const quantity = lineItem.quantity;

  const singlePrice = priceToString(lineItem.price);

  const totalPrice = priceToString({
    ...lineItem.price,
    amount: lineItem.price.amount * quantity,
  });

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

      <Box display="flex" flex={1} alignItems="center">
        <Box display="flex" flexDirection="column" flex={1}>
          <Typography align="left">{lineItem.productName}</Typography>
          <Typography variant="subtitle2" align="left">
            {lineItem.variantName}
          </Typography>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyItems="space-between"
        >
          <Box flex={1} width="100%">
            <Box component={Typography} display="flex" width="100%">
              <Box component="span" flex={1}>
                Price
              </Box>
              {totalPrice}
            </Box>

            <Box component={Typography} display="flex" width="100%">
              <Box component="span" flex={1}>
                Quantity
              </Box>
              {quantity}
            </Box>
          </Box>

          <ButtonGroup variant="contained">
            <Button
              onClick={() => {
                onUpdate?.({
                  ...lineItem,
                  quantity: NaturalNumber(lineItem.quantity - 1),
                });
              }}
            >
              <MdRemove />
            </Button>

            <Button
              onClick={() => {
                onUpdate?.({
                  ...lineItem,
                  quantity: NaturalNumber(lineItem.quantity + 1),
                });
              }}
            >
              <MdAdd />
            </Button>

            <Button
              loading={isDeleting}
              onClick={() => {
                onDelete?.(lineItem);
              }}
            >
              <MdDelete />
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
    </Box>
  );
};
