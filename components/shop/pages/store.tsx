import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { ISettings } from "@core";
import { IProduct } from "@core";
import { routes } from "../../../routes";
import { PageLayout } from "../../app/layout";
import { CardActionAreaLink } from "../../shared/clickable";
import { ResponsiveUniformGrid } from "../../shared/uniform-grid";
import { ProductCard } from "../product-card";

export type IShopProps = {
  settings: ISettings;
  products: IProduct[];
};

export const Shop = (props: IShopProps) => {
  const { products, settings } = props;

  return (
    <PageLayout pageTitle={["Store"]} settings={settings}>
      <Container>
        <Box paddingY={2}>
          <Typography variant="h1">Store</Typography>
        </Box>
      </Container>

      <Container disableGutters>
        <ResponsiveUniformGrid>
          {products.map((product) => (
            <CardActionAreaLink
              key={product.id}
              href={routes.singleProduct(product.id)}
            >
              <ProductCard product={product} />
            </CardActionAreaLink>
          ))}
        </ResponsiveUniformGrid>
      </Container>
    </PageLayout>
  );
};
