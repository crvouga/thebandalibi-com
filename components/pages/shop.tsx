import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { ISettings } from "../../lib/data-access";
import { IProduct } from "../../lib/data-access/product";
import { routes } from "../../lib/routes";
import { PageLayout } from "../app/layout";
import { DocumentTitle } from "../app/meta";
import { CardActionAreaLink } from "../shared/clickable";
import { UniformGrid } from "../shared/uniform-grid";
import { ShopProductCard } from "../shop/shop-product-card";

export type IShopProps = {
  settings: ISettings;
  products: IProduct[];
};

export const Shop = (props: IShopProps) => {
  const { products, settings } = props;

  return (
    <PageLayout
      title={DocumentTitle(settings.band.name, "Shop")}
      settings={settings}
    >
      <Container>
        <Box paddingY={2}>
          <Typography variant="h1">Shop</Typography>
          <UniformGrid>
            {products.map((product) => (
              <CardActionAreaLink key={product.id} href={routes.shop()}>
                <ShopProductCard product={product} />
              </CardActionAreaLink>
            ))}
          </UniformGrid>
        </Box>
      </Container>
    </PageLayout>
  );
};
