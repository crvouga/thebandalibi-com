import { formatPriceAmount, currencyCodeToSymbol } from "@data-access";
import Box from "@material-ui/core/Box";
import React from "react";
import Typography, { TypographyProps } from "@material-ui/core/Typography";

export const Price = ({
  amount,
  currencyCode,
  ...props
}: {
  amount: number;
  currencyCode: string;
} & TypographyProps) => {
  const currencySymbol = currencyCodeToSymbol[currencyCode];
  const [integer, decimal] = formatPriceAmount(amount).split(".");

  return (
    <Typography {...props}>
      <Box
        component="span"
        sx={{
          fontSize: "1rem",
        }}
      >
        {currencySymbol}
      </Box>

      {integer}

      <Box
        component="span"
        sx={{
          fontSize: "1rem",
        }}
      >
        {decimal}
      </Box>
    </Typography>
  );
};
