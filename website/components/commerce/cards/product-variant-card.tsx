import { CardLayout, Image } from "@components/generic";
import { IProductVariant } from "@data-access";
import React from "react";

export const ProductVariantCard = ({
  variant,
}: {
  variant: IProductVariant;
}) => {
  return (
    <CardLayout
      background={
        <Image aspectRatio={1} src={variant.image.src} alt={variant.name} />
      }
      title={variant.name}
    />
  );
};
