import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Image from "next/image";
import React from "react";
import { AspectRatio } from "../shared/aspect-ratio";

export const ProductCard = ({
  product,
}: {
  product: { thumbnailUrl: string; name: string };
}) => {
  return (
    <Card variant="outlined" style={{ backgroundColor: "transparent" }}>
      <AspectRatio ratio={1}>
        <Image
          layout="fill"
          objectFit="cover"
          src={product.thumbnailUrl}
          alt={product.name}
        />
      </AspectRatio>
      <CardHeader title={product.name} />
    </Card>
  );
};

export const ProductImageCard = ({
  product,
}: {
  product: { thumbnailUrl: string; name: string };
}) => {
  return (
    <Card>
      <AspectRatio ratio={1}>
        <Image
          layout="fill"
          objectFit="cover"
          src={product.thumbnailUrl}
          alt={product.name}
        />
      </AspectRatio>
    </Card>
  );
};
