import { IProduct } from "@data-access";
import { plural } from "@utility";
import {
  Skeleton,
  CardActionArea,
  CardLayout,
  Image,
} from "@components/generic";
import React from "react";
import { routes } from "../../top-level";

const ASPECT_RATIO = 1;

export const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <CardActionArea href={routes.singleProduct(product.productId)}>
      <CardLayout
        background={
          <Image
            aspectRatio={ASPECT_RATIO}
            alt={product.name}
            src={product.thumbnail.src}
          />
        }
        title={product.name}
        subtitle={plural({
          count: product.variants.length,
          singularWord: "Variant",
        })}
      />
    </CardActionArea>
  );
};

export const ProductCardSkeleton = () => {
  return <Skeleton aspectRatio={ASPECT_RATIO} />;
};
