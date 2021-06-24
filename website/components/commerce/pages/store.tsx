import { IProduct, ISettings } from "@data-access";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { UniformGrid } from "@components/generic";
import React from "react";
import { PageWrapper } from "../../top-level";
import { ProductCard } from "../cards/product-card";

export type IShopProps = {
  settings: ISettings;
  products: IProduct[];
};

export const Shop = ({ products, settings }: IShopProps) => {
  return (
    <PageWrapper pageTitle={["Store"]} settings={settings}>
      <Container>
        <Box paddingY={2}>
          <Typography variant="h1">Store</Typography>
        </Box>
      </Container>

      <Container disableGutters>
        <UniformGrid ItemProps={{ xs: 6 }}>
          {products.map((product) => (
            <ProductCard key={product.productId} product={product} />
          ))}
        </UniformGrid>
      </Container>
    </PageWrapper>
  );
};
