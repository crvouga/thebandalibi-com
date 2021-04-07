import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import { ISettings } from "../../lib/data-access";
import { IProductInfo } from "../../lib/data-access/product";
import {
  descendAlphabeticallyBy,
  toLongestCommonPrefix,
} from "../../lib/utility";
import { PageLayout } from "../app/layout";
import { DocumentTitle } from "../app/meta";
import { ImageCard } from "../shared/image";
import {
  ShopProductInfoVariantHorizontalList,
  ShopProductInfoVariantVerticalList,
} from "../shop/shop-product-info-variant-list";

export type IShopProductSingle = {
  settings: ISettings;
  productInfo: IProductInfo;
};

export const ShopProductSingle = (props: IShopProductSingle) => {
  const { settings, productInfo } = props;

  const [selectedVariantId, setSelectedVariantId] = useState(
    productInfo.variants[0].id
  );

  const selectedVariant = productInfo.variants.find(
    (variant) => variant.id === selectedVariantId
  );

  const src =
    selectedVariant?.product.image ?? productInfo.product.thumbnailUrl;

  const alt = selectedVariant?.product.name ?? productInfo.product.name;

  const names = productInfo.variants.map((variant) => variant.name);
  const longestCommonPrefix = toLongestCommonPrefix(names);

  return (
    <PageLayout
      title={DocumentTitle(
        settings.band.name,
        "Shop",
        productInfo.product.name
      )}
      settings={settings}
    >
      <Container maxWidth="lg" disableGutters>
        <Box p={2}>
          <Typography variant="h2" gutterBottom>
            {productInfo.product.name}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <ImageCard ratio={1} src={src} alt={alt} />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box paddingY={1}>
                <Typography variant="h3" color="initial">
                  Variants
                </Typography>

                <ShopProductInfoVariantHorizontalList
                  selectedVariantId={selectedVariantId}
                  variants={descendAlphabeticallyBy(
                    (variant) => variant.name,
                    productInfo.variants
                  )}
                  onClick={(variant) => {
                    setSelectedVariantId(variant.id);
                  }}
                  formatName={({ name }) => {
                    return name.replace(longestCommonPrefix, "").trim();
                  }}
                />
              </Box>

              <ShopProductInfoVariantVerticalList
                variants={selectedVariant ? [selectedVariant] : []}
              />

              <Box paddingY={1}>
                <Button
                  disabled={!selectedVariant}
                  variant="contained"
                  size="large"
                  fullWidth
                >
                  Add To Cart
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </PageLayout>
  );
};
