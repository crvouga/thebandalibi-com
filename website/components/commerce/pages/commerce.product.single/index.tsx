import { Link, UniformGrid } from "@components/generic";
import { PageWrapper } from "@components/shared";
import { LABELS, ROUTES } from "@config";
import { IProduct, ISettings } from "@data-access";
import Box from "@material-ui/core/Box";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { ProductCard } from "../../cards";
import { AddToCart } from "./add-to-cart";
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

  const optionsState = useProductOptionsState({ product });

  return (
    <PageWrapper
      pageTitle={[LABELS.commerce, product.productName]}
      settings={settings}
      breadcrumbs={
        <Breadcrumbs>
          <Link href={ROUTES.home()}>{LABELS.home}</Link>
          <Link href={ROUTES.commerce()}>{LABELS.commerce}</Link>
          <Link color="text.primary">{product.productName}</Link>
        </Breadcrumbs>
      }
    >
      <Container sx={{ marginBottom: 2 }}>
        <Typography variant="h2">{product.productName}</Typography>
      </Container>

      <Container disableGutters>
        <UniformGrid
          ItemProps={{
            xs: 12,
            sm: 12,
            md: 6,
            lg: 6,
            xl: 6,
          }}
        >
          <ProductImages images={product.images} state={imagesState} />

          <Box>
            <ProductOptions product={product} state={optionsState} />

            <AddToCart
              product={product}
              selectedOptions={optionsState.selectedOptions}
            />

            <ProductDescription product={product} />
          </Box>
        </UniformGrid>

        <Typography variant="h2" sx={{ paddingX: 2, marginTop: 2 }}>
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
