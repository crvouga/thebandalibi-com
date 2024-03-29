import { UniformGrid } from "@components/generic";
import { PageHeader, PageWrapper } from "@components/shared";
import { LABELS, ROUTES } from "@config";
import { IProduct, ISettings } from "@data-access";
import Grid from "@material-ui/core/Grid";
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
  const imagesState = useProductImagesState({ product });
  const optionsState = useProductOptionsState({ product });

  return (
    <PageWrapper
      pageTitle={[LABELS.commerce, product.productName]}
      settings={settings}
    >
      <PageHeader
        breadcrumbs={[
          {
            href: ROUTES.home(),
            label: LABELS.home,
          },
          {
            href: ROUTES.commerce(),
            label: LABELS.commerce,
          },
          {
            label: product.productName,
          },
        ]}
        title={product.productName}
      />

      <Grid container sx={{ marginY: 2 }}>
        <Grid item xs={12} lg={8}>
          <ProductImages product={product} state={imagesState} />
        </Grid>

        <Grid item xs={12} lg={4}>
          <ProductOptions product={product} state={optionsState} />

          <AddToCart
            product={product}
            selectedOptions={optionsState.selectedOptions}
          />

          <ProductDescription product={product} />
        </Grid>
      </Grid>

      <Typography variant="h2" gutterBottom sx={{ marginX: 2 }} align="center">
        {LABELS.relatedProducts}
      </Typography>

      <UniformGrid ItemProps={{ xs: 6, sm: 3, md: 3 }}>
        {relatedProducts.map((product) => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </UniformGrid>
    </PageWrapper>
  );
};
