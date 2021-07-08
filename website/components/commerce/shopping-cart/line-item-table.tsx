import { Avatar } from "@components/generic";
import { ILineItem } from "@data-access";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import React from "react";

export const LineItemTable = ({ lineItems }: { lineItems: ILineItem[] }) => {
  return (
    <TableContainer>
      <Table aria-label="simple table">
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
