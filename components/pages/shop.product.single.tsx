import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { ISettings } from "../../lib/data-access";
import { IProductInfo } from "../../lib/data-access/product";
import { decodeSku } from "../../lib/printful/printful-sku";
import { unique } from "../../lib/utility";
import { PageLayout } from "../app/layout";
import { DocumentTitle } from "../app/meta";
import { ImageCard } from "../shared/image";
import { QuantityInput, useQuantityInputState } from "../shop/quantity-input";
import { useShoppingCartState } from "../shop/shopping-cart-state";
import {
  ToggleInputAvatars,
  ToggleInputChips,
  useToggleInputState,
} from "../shop/toggle-input";

export type IShopProductSingle = {
  settings: ISettings;
  productInfo: IProductInfo;
};

export const ShopProductSingle = (props: IShopProductSingle) => {
  const { settings, productInfo } = props;

  const colors = unique(
    productInfo.variants.map((variant) => decodeSku(variant.sku)?.color)
  );

  const sizes = unique(
    productInfo.variants.map((variant) => decodeSku(variant.sku)?.size)
  );

  const quantityState = useQuantityInputState({
    lowerBound: 1,
    upperBound: 10,
    initialQuantity: 1,
  });

  const colorToggleInputState = useToggleInputState({
    values: colors,
    initialSelected: colors[0],
  });

  const sizeToggleInputState = useToggleInputState({
    values: sizes,
    initialSelected: sizes[Math.floor(sizes.length / 2)],
  });

  const selectedVariant = productInfo.variants.find(
    (variant) =>
      decodeSku(variant.sku).color === colorToggleInputState.selected &&
      decodeSku(variant.sku).size === sizeToggleInputState.selected
  );

  const shoppingCartState = useShoppingCartState();

  const src =
    selectedVariant?.product.image ?? productInfo.product.thumbnailUrl;

  const alt = selectedVariant?.product.name ?? productInfo.product.name;

  const price = (selectedVariant?.retailPrice ?? 0) * quantityState.quantity;
  const formatedPrice = `${price} ${selectedVariant?.currency}`;

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
                  Color
                </Typography>
                <ToggleInputAvatars
                  {...colorToggleInputState}
                  valueToSrc={(value) =>
                    productInfo.variants
                      .filter(
                        (variant) => decodeSku(variant.sku).color === value
                      )
                      .map((variant) => variant.product.image)[0] ?? ""
                  }
                />
              </Box>

              <Box paddingY={1}>
                <Typography variant="h3" color="initial">
                  Size
                </Typography>

                <ToggleInputChips {...sizeToggleInputState} />
              </Box>

              <Box paddingY={1}>
                <Typography variant="h3" color="initial">
                  Quantity
                </Typography>

                <QuantityInput {...quantityState} />
              </Box>

              <Box paddingY={1}>
                <Typography variant="h5">{formatedPrice}</Typography>
              </Box>

              <Box paddingY={1}>
                <Button
                  disabled={!selectedVariant}
                  variant="contained"
                  size="large"
                  fullWidth
                  onClick={() => {
                    if (selectedVariant) {
                      shoppingCartState.addItem({
                        sku: selectedVariant.sku,
                        quantity: quantityState.quantity,
                      });
                    }
                  }}
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
