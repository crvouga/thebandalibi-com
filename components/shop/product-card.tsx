import Box from "@material-ui/core/Box";
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
    <Box width="100%" display="flex" alignItems="center">
      <Box width="50%">
        <AspectRatio ratio={1}>
          <Image layout="fill" src={product.thumbnailUrl} alt={product.name} />
        </AspectRatio>
      </Box>
      <Box width="50%">
        <CardHeader title={product.name} />
      </Box>
    </Box>
  );
};
