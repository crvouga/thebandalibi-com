import {
  CardActionArea,
  CardLayoutHeadline,
  CollectionImage,
  Image,
  Skeleton,
} from "@components/generic";
import { IProduct, formatPrice, productToAveragePrice } from "@data-access";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { routes } from "../../shared";

const ASPECT_RATIO = 1;

export const ProductCard = ({ product }: { product: IProduct }) => {
  const averagePrice = formatPrice(productToAveragePrice(product));

  return (
    <CardActionArea href={routes.singleProduct(product)}>
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

export const ProductCardSkeleton = () => {
  return <Skeleton aspectRatio={ASPECT_RATIO} />;
};

export const StoreCard = ({ products }: { products: IProduct[] }) => {
  return (
    <CardActionArea href={routes.store()}>
      <CardLayoutHeadline
        backgroundColor="rgba(255, 255, 255, 1)"
        background={
          <CollectionImage
            aspectRatio={7 / 8}
            srcs={products.map((product) => product.thumbnail.src)}
          />
        }
        headline="See All Merch"
      />
    </CardActionArea>
  );
};
