import { CardActionArea, Image } from "@components/generic";
import { CardLayout } from "@components/shared";
import { ROUTES } from "@config";
import { formatPrice, IProduct, productToAveragePrice } from "@data-access";
import React from "react";

export const ProductCard = ({ product }: { product: IProduct }) => {
  const averagePrice = formatPrice(productToAveragePrice(product));

  return (
    <CardActionArea href={ROUTES.singleProduct(product)}>
      <CardLayout
        background={
          <Image
            aspectRatio={1}
            alt={product.name}
            src={product.thumbnail.src}
          />
        }
        title={product.name}
        subtitle={averagePrice}
      />
    </CardActionArea>
  );
};
