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
      <Box width="25%" marginRight={1}>
        <Image
          aspectRatio={1}
          src={lineItem.image.src}
          alt={lineItem.image.alt}
        />
      </Box>

      <Box display="flex" flex={1} alignItems="center">
        <Box display="flex" flexDirection="column" flex={1}>
          <Typography align="left">{lineItem.productName}</Typography>
          <Typography variant="subtitle1" align="left">
            {`${lineItem.variantName} • ${singlePrice}`}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyItems: "space-between",
            marginLeft: 1,
          }}
        >
          <ButtonGroup size="small" color="inherit">
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
              disableRipple
              disableTouchRipple
              disableFocusRipple
              disableElevation
            >
              {lineItem.quantity}
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
          </ButtonGroup>
          <Button
            color="inherit"
            size="small"
            loading={isDeleting}
            onClick={() => {
              onDelete?.(lineItem);
            }}
          >
            Remove
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
