import { IProductInfo, ISettings, IProductVariant } from "@core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { routes } from "../../../routes";
import { toLongestCommonPrefix } from "../../../utility";
import { PageLayout } from "../../app/layout";
import {
  HorizontalList,
  HorizontalListItem,
} from "../../shared/horizontal-list";
import { ImageCard } from "../../shared/image";
import { ProductVariantCard } from "../product-variant-card";
import { useShoppingCartState } from "../shopping-cart-state";

export type IProductSingle = {
  settings: ISettings;
  productInfo: IProductInfo;
};

export const ProductSingle = (props: IProductSingle) => {
  const { settings, productInfo } = props;

  const router = useRouter();

  const [
    selectedVariant,
    setSelectedVariant,
  ] = useState<IProductVariant | null>(null);

  const src =
    selectedVariant?.product.image ?? productInfo.product.thumbnailUrl;

  const alt = selectedVariant?.product.name ?? productInfo.product.name;

  const longestCommonPrefix = toLongestCommonPrefix(
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
      pageTitle={["Store", productInfo.product.name]}
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

              <HorizontalList>
                {productInfo.variants.map((variant) => (
                  <HorizontalListItem key={variant.id}>
                    <ProductVariantCard
                      selected={variant.id === selectedVariant?.id}
                      title={variant.name.replace(longestCommonPrefix, "")}
                      subtitle={`${variant.retailPrice} ${variant.currency}`}
                      image={variant.product.image}
                      onClick={() => {
                        setSelectedVariant(variant);
                      }}
                    />
                  </HorizontalListItem>
                ))}
              </HorizontalList>

              <Box paddingY={2}>
                <Button
                  color="primary"
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
