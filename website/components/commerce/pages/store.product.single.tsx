import { Image, UniformGrid } from "@components/generic";
import { IProduct, ISettings, productToOptionsByName } from "@data-access";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { PageWrapper } from "../../top-level";
import { ProductVariantCard } from "../cards";
import { ShoppingCartAddButton } from "../shopping-cart";

export type IProductSingleProps = {
  settings: ISettings;
  product: IProduct;
};

export const ProductSingle = ({ settings, product }: IProductSingleProps) => {
  console.log({ product, optionsByName: productToOptionsByName(product) });

  return (
    <PageWrapper pageTitle={["Store", product.name]} settings={settings}>
      <Container disableGutters>
        <UniformGrid ItemProps={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
          <Container maxWidth="sm" disableGutters>
            <Image
              aspectRatio={1}
              src={product.thumbnail.src}
              alt={product.name}
            />
          </Container>

          <Box p={2}>
            <Typography variant="h1">{product.name}</Typography>

            <Box display="flex" flexWrap="wrap" paddingBottom={2}>
              {product.variants.map((variant) => (
                <Box key={variant.variantId} width="160px">
                  <ProductVariantCard variant={variant} />
                </Box>
              ))}
            </Box>

            <ShoppingCartAddButton />

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
