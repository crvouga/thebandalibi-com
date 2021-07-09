import { Image, QuantityInput } from "@components/generic";
import { ILineItem, ILineItemUpdate, formatPrice } from "@data-access";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { NaturalNumber } from "@utility";
import React from "react";
import { MdDelete } from "react-icons/md";

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

  const singlePrice = formatPrice(lineItem.price);

  return (
    <Box
      paddingY={1}
      display="flex"
      flexDirection="row"
      width="100%"
      alignItems="center"
      style={{ opacity: isDeleting ? 0.5 : 1 }}
    >
      <Box width="25%" marginRight={1}>
        <Image
          aspectRatio={1}
          src={lineItem.image.src}
          alt={lineItem.image.alt}
        />
      </Box>

      <Box display="flex" flex={1} alignItems="center">
        <Box display="flex" flexDirection="column" flex={1}>
          <Typography variant="h6">{lineItem.productName}</Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {lineItem.variantName}
          </Typography>
          <Typography variant="h6">{singlePrice}</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyItems: "space-between",
            marginLeft: 1,
            height: "100%",
          }}
        >
          <IconButton
            color="inherit"
            disabled={isDeleting}
            onClick={() => {
              onDelete?.(lineItem);
            }}
            sx={{
              marginLeft: "auto",
              marginBottom: 1,
            }}
          >
            <MdDelete />
          </IconButton>

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
