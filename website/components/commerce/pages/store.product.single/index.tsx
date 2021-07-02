import { Image, UniformGrid } from "@components/generic";
import {
  IProduct,
  ISettings,
  selectedOptionsToVariant,
  productToOptionsByName,
} from "@data-access";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import { PageWrapper } from "../../../top-level";
import { ShoppingCartAddButton } from "../../shopping-cart";
import { ProductOptions, useProductOptionsState } from "./product-options";
import { ProductImages, useProductImagesState } from "./product-images";

export type IProductSingleProps = {
  settings: ISettings;
  product: IProduct;
};

export const ProductSingle = ({ settings, product }: IProductSingleProps) => {
  const imagesState = useProductImagesState();
  const optionsState = useProductOptionsState();

  const selectedVariant = selectedOptionsToVariant(
    product,
    optionsState.selected
  );

  const optionsByName = productToOptionsByName(product);

  return (
    <PageWrapper pageTitle={["Store", product.name]} settings={settings}>
      <Container disableGutters>
        <UniformGrid ItemProps={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
          <Container maxWidth="sm" disableGutters>
            <ProductImages images={product.images} state={imagesState} />
          </Container>

          <Box p={2}>
            <Typography variant="h1">{product.name}</Typography>

            <ProductOptions
              optionsByName={optionsByName}
              state={optionsState}
            />

            <ShoppingCartAddButton disabled={selectedVariant === null} />

            <Box
              paddingY={2}
              dangerouslySetInnerHTML={{ __html: product.descriptionHTML }}
            />
          </Box>
        </UniformGrid>
      </Container>
    </PageWrapper>
  );
};
