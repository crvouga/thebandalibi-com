import { plural } from "@utility";
import { CardActionArea, CardLayout, Image } from "generic-components";
import React from "react";
import { routes } from "lib";

export const ProductCard = ({
  product,
}: {
  product: {
    id: string | number;
    thumbnailUrl: string;
    name: string;
    variantCount: number;
  };
}) => {
  return (
    <CardActionArea href={routes.singleProduct(product.id)}>
      <CardLayout
        background={
          <Image
            aspectRatio={1}
            alt={product.name}
            src={product.thumbnailUrl}
          />
        }
        title={product.name}
        subtitle={plural({
          count: product.variantCount,
          singularWord: "Variant",
        })}
      />
    </CardActionArea>
  );
};
