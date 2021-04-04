import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import React from "react";
import { IProduct } from "../../lib/data-access/product";
import { AspectRatio } from "../shared/aspect-ratio";

export const ShopProductCard = ({ product }: { product: IProduct }) => {
  return (
    <Card>
      <AspectRatio ratio={1}>
        <Image layout="fill" objectFit="cover" src={product.thumbnailUrl} />
      </AspectRatio>

      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        p={2}
      >
        <Typography variant="h6">{product.name}</Typography>
      </Box>
    </Card>
  );
};
