import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Image from "next/image";
import React from "react";
import { AspectRatio } from "../shared/aspect-ratio";
import { ShopIcon } from "../shared/icons";

export const ShopProductCard = ({
  product,
}: {
  product: { thumbnailUrl: string; name: string };
}) => {
  return (
    <Card>
      <CardHeader
        avatar={<ShopIcon />}
        title={product.name}
        titleTypographyProps={{ variant: "h6" }}
      />
      <AspectRatio ratio={1}>
        <Image layout="fill" objectFit="cover" src={product.thumbnailUrl} />
      </AspectRatio>
    </Card>
  );
};
