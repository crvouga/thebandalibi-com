import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { ISettings } from "../../lib/data-access";
import { IProductInfo } from "../../lib/data-access/product";
import { PageLayout } from "../app/layout";
import { DocumentTitle } from "../app/meta";
import { ShopProductImageCard } from "../shop/shop-product-card";
import { ShopProductInfoVariantList } from "../shop/shop-product-info-variant-list";
import { QuantityInput, useQuantityInputState } from "../shop/quantity-input";

export type IShopProductSingle = {
  settings: ISettings;
  productInfo: IProductInfo;
};

export const ShopProductSingle = (props: IShopProductSingle) => {
  const { settings, productInfo } = props;

  const quantityState = useQuantityInputState({
    lowerBound: 1,
    upperBound: 10,
    initialQuantity: 1,
  });

  return (
    <PageLayout
      title={DocumentTitle(settings.band.name, "Shop")}
      settings={settings}
    >
      <Container maxWidth="lg" disableGutters>
        <Box p={2}>
          <Typography variant="h2" gutterBottom>
            {productInfo.product.name}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <ShopProductImageCard product={productInfo.product} />
            </Grid>

            <Grid item xs={12} sm={6}>
              <ShopProductInfoVariantList productInfo={productInfo} />

              <Box paddingBottom={2}>
                <QuantityInput {...quantityState} />
              </Box>

              <Button variant="contained" size="large" fullWidth>
                Add To Cart
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </PageLayout>
  );
};
