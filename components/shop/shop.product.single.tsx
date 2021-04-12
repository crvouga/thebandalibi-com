import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { ISettings } from "../../lib/data-access";
import { IProductInfo, IVariant } from "../../lib/data-access/product";
import { routes } from "../../lib/routes";
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
} from "./shop-product-info-variant-list";
import { useShoppingCartState } from "./shopping-cart-state";

export type IShopProductSingle = {
  settings: ISettings;
  productInfo: IProductInfo;
};

export const ShopProductSingle = (props: IShopProductSingle) => {
  const { settings, productInfo } = props;

  const router = useRouter();

  const [selectedVariant, setSelectedVariant] = useState<IVariant | null>(null);

  const src =
    selectedVariant?.product.image ?? productInfo.product.thumbnailUrl;

  const alt = selectedVariant?.product.name ?? productInfo.product.name;

  const longestCommonVariantNamePrefix = toLongestCommonPrefix(
    productInfo.variants.map((variant) => variant.name)
  );

  const shoppingCartState = useShoppingCartState();

  const handleAddToCart = () => {
    if (selectedVariant) {
      shoppingCartState.addItem({
        variant: selectedVariant,
      });
      router.push(routes.shoppingCart());
    }
  };

  return (
    <PageLayout
      title={DocumentTitle(
        settings.band.name,
        "Shop",
        productInfo.product.name
      )}
      settings={settings}
      hideFooter
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
              <Typography variant="h2">Variants</Typography>
              <ShopProductInfoVariantHorizontalList
                selectedVariantId={selectedVariant?.id}
                variants={descendAlphabeticallyBy(
                  (variant) => variant.name,
                  productInfo.variants
                )}
                onClick={(variant) => {
                  setSelectedVariant(variant);
                }}
                formatName={({ name }) => {
                  return name
                    .replace(longestCommonVariantNamePrefix, "")
                    .trim();
                }}
              />

              <ShopProductInfoVariantVerticalList
                variants={selectedVariant ? [selectedVariant] : []}
              />

              <Box paddingY={1}>
                <Button
                  disabled={!selectedVariant}
                  variant="contained"
                  size="large"
                  fullWidth
                  startIcon={<MdAddShoppingCart />}
                  onClick={handleAddToCart}
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
