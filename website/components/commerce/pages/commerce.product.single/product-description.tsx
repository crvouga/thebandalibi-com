import { LABELS } from "@config";
import { IProduct } from "@data-access";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import React from "react";

export const ProductDescription = ({ product }: { product: IProduct }) => {
  return (
    <>
      <Paper variant="outlined" sx={{ p: 2 }}>
        <Typography variant="h4" gutterBottom>
          {LABELS.productDescription}
        </Typography>

        <Typography component="div" color="text.secondary">
          <div dangerouslySetInnerHTML={{ __html: product.descriptionHTML }} />
        </Typography>
      </Paper>
    </>
  );
};
