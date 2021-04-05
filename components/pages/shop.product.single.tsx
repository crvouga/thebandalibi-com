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
import { ToggleInput, useToggleInputState } from "../shop/toggle-input";

export type IShopProductSingle = {
  settings: ISettings;
  productInfo: IProductInfo;
};

const sizeCodeToSizeLabel = (sizeCode: string) => {
  switch (sizeCode.toUpperCase()) {
    case "XS":
      return "Extra Small";

    case "S":
      return "Small";

    case "M":
      return "Medium";

    case "L":
      return "Large";

    case "XL":
      return "Extra Large";

    case "2XL":
      return "2 Extra Large";

    case "3XL":
      return "3 Extra Large";
  }
  return sizeCode;
};

export const ShopProductSingle = (props: IShopProductSingle) => {
  const { settings, productInfo } = props;

  const colors = unique(
    productInfo.variants.map((variant) => decodeSku(variant.sku).color)
  );

  const sizes = unique(
    productInfo.variants.map((variant) => decodeSku(variant.sku).size)
  );

  const quantityState = useQuantityInputState({
    lowerBound: 1,
    upperBound: 10,
    initialQuantity: 1,
  });

  const colorToggleInputState = useToggleInputState({
    values: colors,
  });

  const sizeToggleInputState = useToggleInputState({
    values: sizes,
  });

  const selectedVariant = productInfo.variants.find(
    (variant) =>
      decodeSku(variant.sku).color === colorToggleInputState.selected &&
      decodeSku(variant.sku).size === sizeToggleInputState.selected
  );

  const src =
    selectedVariant?.product.image ?? productInfo.product.thumbnailUrl;

  const alt = selectedVariant?.product.name ?? productInfo.product.name;

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
              <ImageCard ratio={1} src={src} alt={alt} />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box paddingY={1}>
                <Typography variant="h3" color="initial">
                  Color
                </Typography>
                <ToggleInput {...colorToggleInputState} />
              </Box>

              <Box paddingY={1}>
                <Typography variant="h3" color="initial">
                  Size
                </Typography>
                <ToggleInput
                  {...sizeToggleInputState}
                  valueToLabel={sizeCodeToSizeLabel}
                />
              </Box>

              <Box paddingY={1}>
                <Typography variant="h3" color="initial">
                  Quantity
                </Typography>
                <QuantityInput {...quantityState} />
              </Box>

              <Box paddingY={1}>
                <Typography variant="h5">{`${
                  selectedVariant?.retailPrice * quantityState.quantity
                } ${selectedVariant?.currency}`}</Typography>
              </Box>

              <Box marginTop={1} paddingY={1}>
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
