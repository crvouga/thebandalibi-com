import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Image from "next/image";
import React from "react";
import { ISettings } from "../../lib/data-access";
import { IProductInfo } from "../../lib/data-access/product";
import { PageLayout } from "../app/layout";
import { DocumentTitle } from "../app/meta";
import { AspectRatio } from "../shared/aspect-ratio";
import Typography from "@material-ui/core/Typography";

export type IShopProductSingle = {
  settings: ISettings;
  productInfo: IProductInfo;
};

export const ShopProductSingle = (props: IShopProductSingle) => {
  const { settings, productInfo } = props;

  return (
    <PageLayout
      title={DocumentTitle(settings.band.name, "Shop")}
      settings={settings}
    >
      <Container maxWidth="lg" disableGutters>
        <Box p={2}>
          <Typography variant="h1">{productInfo.product.name}</Typography>
          <AspectRatio ratio={1}>
            <Image layout="fill" src={productInfo.product.thumbnailUrl} />
          </AspectRatio>
        </Box>
      </Container>
    </PageLayout>
  );
};
