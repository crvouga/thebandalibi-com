import { CartItemActions } from "@components/commerce/cart/cart-item-actions";
import {
  CartItemInfo,
  NoCartItemInfo,
} from "@components/commerce/cart/cart-item-info";
import { Link, UniformGrid } from "@components/generic";
import { PageWrapper } from "@components/shared";
import { LABELS, ROUTES } from "@config";
import {
  CartItemQuantity,
  IProduct,
  ISettings,
  productToOptionsByName,
  selectedOptionsToVariant,
} from "@data-access";
import { Paper } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { purple } from "@material-ui/core/colors";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { difference } from "@utility";
import React, { useEffect } from "react";
import { ProductCard } from "../../cards";
import { useCartQuery } from "../../cart/cart-state";
import { AddToCartButton, AddToCartButtonSkeleton } from "./add-to-cart-button";
import { ProductDescription } from "./product-description";
import { ProductImages, useProductImagesState } from "./product-images";
import { ProductOptions, useProductOptionsState } from "./product-options";

export type IProductSingleProps = {
  settings: ISettings;
  product: IProduct;
  relatedProducts: IProduct[];
};

export const ProductSingle = ({
  settings,
  relatedProducts,
  product,
}: IProductSingleProps) => {
  const imagesState = useProductImagesState();
  const optionsState = useProductOptionsState();
  const selectedOptionNames = optionsState.selectedOptions.map(
    (option) => option.name
  );

  const optionsByName = productToOptionsByName(product);
  const optionNames = Object.keys(optionsByName);

  const selectedVariant = selectedOptionsToVariant(
    product,
    optionsState.selectedOptions
  );

  const noCartItemInfoText = `Please select ${difference(
    optionNames,
    selectedOptionNames
  ).join(" &")}`;

  const cartQuery = useCartQuery();

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
    <PageWrapper
      pageTitle={[LABELS.commerce, product.name]}
      settings={settings}
    >
      <Container sx={{ p: 2 }}>
        <Breadcrumbs>
          <Link href={ROUTES.landing()}>{LABELS.landingPage}</Link>
          <Link href={ROUTES.commerce()}>{LABELS.commerce}</Link>
          <Link color="text.primary">{product.name}</Link>
        </Breadcrumbs>
      </Container>

      <Container disableGutters>
        <UniformGrid ItemProps={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
          <ProductImages images={product.images} state={imagesState} />

          <Box
            sx={{
              p: 2,
            }}
          >
            <Typography variant="h1">{product.name}</Typography>
            <Paper sx={{ p: 2 }}>
              <ProductOptions
                optionsByName={optionsByName}
                state={optionsState}
              />

              <Box sx={{ paddingBottom: 1 }}>
                {selectedVariant ? (
                  <CartItemInfo
                    productBackgroundColor={purple[500]}
                    cartItem={{
                      price: selectedVariant.price,
                      quantity: CartItemQuantity(1),
                      productName: product.name,
                      variantName: selectedVariant.name,
                      image: {
                        src: selectedVariant.image.src,
                        alt: selectedVariant.image.alt,
                      },
                    }}
                  />
                ) : (
                  <NoCartItemInfo text={noCartItemInfoText} />
                )}
              </Box>

              {cartQuery.data ? (
                <AddToCartButton
                  cart={cartQuery.data}
                  selectedVariant={selectedVariant}
                />
              ) : (
                <AddToCartButtonSkeleton />
              )}
            </Paper>
            <Box sx={{ marginTop: 2 }}>
              <ProductDescription product={product} />
            </Box>
          </Box>
        </UniformGrid>

        <Typography variant="h2" sx={{ paddingX: 2 }}>
          {LABELS.relatedProducts}
        </Typography>

        <UniformGrid ItemProps={{ xs: 6, sm: 3, md: 3 }}>
          {relatedProducts.map((product) => (
            <ProductCard key={product.productId} product={product} />
          ))}
        </UniformGrid>
      </Container>
    </PageWrapper>
  );
};
