import { IProduct } from "@data-access";
import { plural } from "@utility";
import { CardActionArea, CardLayout, Image } from "@components/generic";
import React from "react";
import { routes } from "../../top-level";

export const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <CardActionArea href={routes.singleProduct(product.productId)}>
      <CardLayout
        background={
          <Image
            aspectRatio={1}
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
