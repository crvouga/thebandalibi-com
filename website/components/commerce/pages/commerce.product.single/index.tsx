import { Link, UniformGrid } from "@components/generic";
import { PageWrapper } from "@components/shared";
import { LABELS, ROUTES } from "@config";
import {
  IProduct,
  ISettings,
  productToOptionsByName,
  selectedOptionsToVariant,
} from "@data-access";
import Box from "@material-ui/core/Box";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React, { useEffect } from "react";
import { ProductCard } from "../../cards";
import { useCartQuery } from "../../cart/cart-state";
import { AddToCartButton, AddToCartButtonSkeleton } from "./add-to-cart-button";
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

  const optionsByName = productToOptionsByName(product);
  const selectedVariant = selectedOptionsToVariant(
    product,
    optionsState.selectedOptions
  );

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
      <Container sx={{ paddingTop: 2 }}>
        <Breadcrumbs>
          <Link href={ROUTES.landing()}>{LABELS.landingPage}</Link>
          <Link href={ROUTES.commerce()}>{LABELS.commerce}</Link>
          <Link color="text.primary">{product.name}</Link>
        </Breadcrumbs>
      </Container>

      <Container disableGutters>
        <UniformGrid ItemProps={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
          <Container maxWidth="sm" disableGutters>
            <ProductImages images={product.images} state={imagesState} />
          </Container>

          <Box
            sx={{
              p: 2,
              "& > *": {
                marginBottom: 2,
              },
            }}
          >
            <Typography variant="h1" align="center">
              {product.name}
            </Typography>

            <ProductOptions
              optionsByName={optionsByName}
              state={optionsState}
            />

            {cartQuery.data ? (
              <AddToCartButton
                cart={cartQuery.data}
                selectedVariant={selectedVariant}
              />
            ) : (
              <AddToCartButtonSkeleton />
            )}

            <Box
              sx={{ marginTop: 2 }}
              dangerouslySetInnerHTML={{ __html: product.descriptionHTML }}
            />
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
