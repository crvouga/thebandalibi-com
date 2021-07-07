import React from "react";
import { Avatar } from "@components/generic";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import Box from "@material-ui/core/Box";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { ILineItem } from "@data-access";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  table: {
    // minWidth: 650,
  },
});

export const LineItemTable = ({ lineItems }: { lineItems: ILineItem[] }) => {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell>Product</TableCell>
            <TableCell>Variant</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lineItems.map((lineItem) => (
            <TableRow key={lineItem.lineItemId}>
              <TableCell>
                <Avatar
                  style={{ backgroundColor: "transparent" }}
                  variant="rounded"
                  src={lineItem.image.src}
                  alt={lineItem.image.src}
                />
              </TableCell>
              <TableCell>{lineItem.productName}</TableCell>
              <TableCell>{lineItem.variantName}</TableCell>
              <TableCell>{lineItem.quantity}</TableCell>
              <TableCell>{lineItem.price.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
