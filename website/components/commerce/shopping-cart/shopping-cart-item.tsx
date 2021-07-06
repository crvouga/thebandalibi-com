import { Image, Avatar } from "@components/generic";
import { ILineItem, priceToString } from "@data-access";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import ButtonBase from "@material-ui/core/ButtonBase";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import { MdDelete, MdRemove, MdAdd } from "react-icons/md";
import { InputBase } from "@material-ui/core";

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
        <InputBase
          id="quantity-input"
          rowsMax={3}
          defaultValue={lineItem.quantity}
          type="number"
        />

        <IconButton
          disabled={!canDelete}
          aria-label="Delete Item"
          onClick={() => {
            onDelete(lineItem);
          }}
        >
          {isDeleting ? (
            <CircularProgress size="1em" color="inherit" />
          ) : (
            <MdDelete />
          )}
        </IconButton>
      </Box>
    </Box>
  );
};
