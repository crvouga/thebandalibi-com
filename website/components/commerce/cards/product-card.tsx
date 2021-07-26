import { CardActionArea, Image } from "@components/generic";
import { ROUTES } from "@config";
import { formatPrice, IProduct, productToAveragePrice } from "@data-access";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import React from "react";

const ASPECT_RATIO = 1;

export const ProductCard = ({ product }: { product: IProduct }) => {
  const averagePrice = formatPrice(productToAveragePrice(product));

  return (
    <CardActionArea href={ROUTES.singleProduct(product)}>
      <Box>
        <Image
          aspectRatio={ASPECT_RATIO}
          alt={product.name}
          src={product.thumbnail.src}
        />
        <Box sx={{ p: 2, paddingTop: 1 }}>
          <Typography align="center" variant="h5" noWrap>
            {product.name}
          </Typography>
          <Typography align="center" variant="h5">
            {averagePrice}
          </Typography>
        </Box>
      </Box>
    </CardActionArea>
  );
};
