import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { MdRemoveShoppingCart } from "react-icons/md";

const ICON_SIZE = "64px";

export const ShoppingCartEmpty = () => {
  return (
    <Box
      paddingY={12}
      color="text.secondary"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box padding={1}>
        <MdRemoveShoppingCart style={{ width: ICON_SIZE, height: ICON_SIZE }} />
      </Box>
      <Typography variant="h5" color="textSecondary" align="center">
        Your shopping cart is empty
      </Typography>
    </Box>
  );
};
