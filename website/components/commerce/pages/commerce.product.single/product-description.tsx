import { LABELS } from "@config";
import { IProduct } from "@data-access";
import Accordion from "@material-ui/core/Accordion";
import Paper from "@material-ui/core/Paper";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";

export const _ProductDescription = ({ product }: { product: IProduct }) => {
  return (
    <>
      <Accordion sx={{ overflow: "hidden" }} variant="outlined">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h4">{LABELS.productDescription}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div dangerouslySetInnerHTML={{ __html: product.descriptionHTML }} />
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export const ProductDescription = ({ product }: { product: IProduct }) => {
  return (
    <>
      <Paper variant="outlined" sx={{ p: 2 }}>
        <Typography variant="h4" gutterBottom>
          {LABELS.productDescription}
        </Typography>

        <div dangerouslySetInnerHTML={{ __html: product.descriptionHTML }} />
      </Paper>
    </>
  );
};
