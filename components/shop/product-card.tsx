import Box from "@material-ui/core/Box";
import CardHeader from "@material-ui/core/CardHeader";
import Image from "next/image";
import React from "react";
import { plural } from "@utility";
import { AspectRatio } from "generic-components";

export const ProductCard = ({
  product,
}: {
  product: { thumbnailUrl: string; name: string; variantCount: number };
}) => {
  return (
    <Box width="100%" display="flex" alignItems="center">
      <Box width={1 / 3}>
        <AspectRatio ratio={1}>
          <Image layout="fill" src={product.thumbnailUrl} alt={product.name} />
        </AspectRatio>
      </Box>
      <Box width={2 / 3}>
        <CardHeader
          title={product.name}
          subheader={plural({
            count: product.variantCount,
            singularWord: "Variant",
          })}
        />
      </Box>
    </Box>
  );
};
