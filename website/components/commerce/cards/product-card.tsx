import { CardActionArea, Image, Price, Skeleton } from "@components/generic";
import { IProduct, productToAveragePrice } from "@data-access";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { routes } from "../../top-level";

const ASPECT_RATIO = 1;

export const ProductCard = ({ product }: { product: IProduct }) => {
  const averagePrice = productToAveragePrice(product);

  return (
    <CardActionArea href={routes.singleProduct(product.productId)}>
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
          <Price align="center" fontSize="1.8em" {...averagePrice} />
        </Box>
      </Box>
    </CardActionArea>
  );
};

export const ProductCardSkeleton = () => {
  return <Skeleton aspectRatio={ASPECT_RATIO} />;
};
