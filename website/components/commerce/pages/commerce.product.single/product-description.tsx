import { LABELS } from "@config";
import { IProduct } from "@data-access";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";

export const ProductDescription = ({ product }: { product: IProduct }) => {
  return (
    <>
      <Accordion>
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