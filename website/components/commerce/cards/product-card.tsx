import { CardActionArea, Image } from "@components/generic";
import { CardLayout } from "@components/shared";
import { ROUTES } from "@config";
import { formatPrice, IProduct, productToAveragePrice } from "@data-access";
import Box from "@material-ui/core/Box";
import { green, purple, red } from "@material-ui/core/colors";
import React from "react";

type IBackgroundColor = "purple" | "red" | "green";

function hashCode(str: string) {
  // java String#hashCode
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}

function intToRGB(i: number) {
  var c = (i & 0x00ffffff).toString(16).toUpperCase();

  return "00000".substring(0, 6 - c.length) + c;
}

const stringToColor = (str: string) => intToRGB(hashCode(str));

const backgroundColorToHex = (backgroundColor: IBackgroundColor) => {
  switch (backgroundColor) {
    case "purple":
      return purple[400];

    case "green":
      return green[400];

    case "red":
      return red[400];
  }
};

const COLORS: IBackgroundColor[] = ["red", "purple", "green"];

export const indexToBackgroundColor = (index: number): IBackgroundColor => {
  return COLORS[index % COLORS.length];
};

export const ProductCard = ({
  backgroundColor = "purple",
  product,
}: {
  backgroundColor?: IBackgroundColor;
  product: IProduct;
}) => {
  const averagePrice = formatPrice(productToAveragePrice(product));

  return (
    <CardActionArea href={ROUTES.singleProduct(product)}>
      <CardLayout
        background={
          <Box
            sx={{
              backgroundColor: backgroundColorToHex(backgroundColor),
              p: 2,
            }}
          >
            <Image
              aspectRatio={1}
              alt={product.name}
              src={product.thumbnail.src}
            />
          </Box>
        }
        title={product.name}
        subtitle={averagePrice}
      />
    </CardActionArea>
  );
};
