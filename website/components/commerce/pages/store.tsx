import { UniformGrid } from "@components/generic";
import { IProduct, ISettings } from "@data-access";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { PageWrapper } from "../../shared";
import { ProductCard } from "../cards/product-card";

export type IShopProps = {
  settings: ISettings;
  products: IProduct[];
};

export const Shop = (props: IShopProps) => {
  const { settings, products } = props;

  return (
    <PageWrapper pageTitle={["Merch"]} settings={settings}>
      <Container>
        <Box paddingY={2}>
          <Typography variant="h1">Merch</Typography>
        </Box>
      </Container>

      <Container disableGutters>
        <UniformGrid ItemProps={{ xs: 6, lg: 3 }}>
          {products.map((product) => (
            <ProductCard key={product.productId} product={product} />
          ))}
        </UniformGrid>
      </Container>
    </PageWrapper>
  );
};
