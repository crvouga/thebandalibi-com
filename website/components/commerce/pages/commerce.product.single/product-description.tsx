import { Markup } from "@components/generic";
import { LABELS } from "@config";
import { IProduct } from "@data-access";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import React from "react";

export const ProductDescription = ({ product }: { product: IProduct }) => {
  return (
    <>
      <Box sx={{ p: 2 }}>
        <Typography variant="h4" gutterBottom>
          {LABELS.productDescription}
        </Typography>

        <Typography component="div" color="text.secondary">
          <Markup markup={product.descriptionHTML} />
        </Typography>
      </Box>
    </>
  );
};
