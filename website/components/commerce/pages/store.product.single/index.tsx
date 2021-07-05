import { Button, UniformGrid } from "@components/generic";
import {
  IProduct,
  ISettings,
  productToOptionsByName,
  selectedOptionsToVariant,
  useCartAddItems,
  useUiState,
} from "@data-access";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import React, { useEffect } from "react";
import { PageWrapper } from "../../../top-level";
import { ShoppingCartAddButton } from "../../shopping-cart";
import { ProductImages, useProductImagesState } from "./product-images";
import { ProductOptions, useProductOptionsState } from "./product-options";

export type IProductSingleProps = {
  settings: ISettings;
  product: IProduct;
};

export const ProductSingle = ({ settings, product }: IProductSingleProps) => {
  const imagesState = useProductImagesState();
  const optionsState = useProductOptionsState();

  const optionsByName = productToOptionsByName(product);
  const selectedVariant = selectedOptionsToVariant(
    product,
    optionsState.selectedOptions
  );

  const uiState = useUiState();
  const cartAddItems = useCartAddItems();

  const handleAddToCart = async () => {
    if (!selectedVariant) {
      return;
    }

    await cartAddItems.mutate([
      {
        variantId: selectedVariant.variantId,
        quantity: 1,
      },
    ]);

    uiState.setState("shopping-cart-opened");
  };

  useEffect(() => {
    if (!selectedVariant?.image) {
      return;
    }

    const index = product.images.findIndex(
      (image) => image.src === selectedVariant.image.src
    );

    if (index === -1) {
      return;
    }

    imagesState.setIndex(index);
  }, [selectedVariant?.image]);

  return (
    <PageWrapper pageTitle={["Store", product.name]} settings={settings}>
      <Container disableGutters>
        <UniformGrid ItemProps={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
          <Container maxWidth="sm" disableGutters>
            <ProductImages images={product.images} state={imagesState} />
          </Container>

          <Box p={2}>
            <Typography variant="h1" align="center">
              {product.name}
            </Typography>

            <Box paddingY={1} />

            <ProductOptions
              optionsByName={optionsByName}
              state={optionsState}
            />

            <Box paddingY={1} />

            <ShoppingCartAddButton
              loading={cartAddItems.status === "loading"}
              disabled={selectedVariant === null}
              onClick={handleAddToCart}
            />
            <Button
              onClick={async () => {
                await cartAddItems.mutate(
                  product.variants.map((varaint) => ({
                    variantId: varaint.variantId,
                    quantity: 1,
                  }))
                );

                uiState.setState("shopping-cart-opened");
              }}
            >
              Add Test
            </Button>

            <Box paddingY={1} />

            <div
              dangerouslySetInnerHTML={{ __html: product.descriptionHTML }}
            />
          </Box>
        </UniformGrid>
      </Container>
    </PageWrapper>
  );
};