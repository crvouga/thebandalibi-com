import { UniformGrid } from "@components/generic";
import { ISettings, useQueryProducts } from "@data-access";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { PageWrapper } from "../../top-level";
import { ProductCard, ProductCardSkeleton } from "../cards/product-card";

export type IShopProps = {
  settings: ISettings;
};

export const Shop = (props: IShopProps) => {
  const { settings } = props;

  const queryProducts = useQueryProducts();

  const products = queryProducts.data ?? [];

  return (
    <PageWrapper pageTitle={["Store"]} settings={settings}>
      <Container>
        <Box paddingY={2}>
          <Typography variant="h1">Store</Typography>
        </Box>
      </Container>

      <Container disableGutters>
        <UniformGrid
          ItemProps={{ xs: 6 }}
          loading={{
            isLoading: queryProducts.status === "loading",
            count: 6,
            render: () => <ProductCardSkeleton />,
          }}
        >
          {products.map((product) => (
            <ProductCard key={product.productId} product={product} />
          ))}
        </UniformGrid>
      </Container>
    </PageWrapper>
  );
};
