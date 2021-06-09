import { IProduct, ISettings } from "@data-access";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { CardActionArea, ResponsiveUniformGrid } from "@ui";
import React from "react";
import { PageWrapper } from "../../top-level";
import { routes } from "../../../routes";
import { ProductCard } from "../product-card";

export type IShopProps = {
  settings: ISettings;
  products: IProduct[];
};

export const Shop = (props: IShopProps) => {
  const { products, settings } = props;

  return (
    <PageWrapper pageTitle={["Store"]} settings={settings}>
      <Container>
        <Box paddingY={2}>
          <Typography variant="h1">Store</Typography>
        </Box>
      </Container>

      <Container disableGutters>
        <ResponsiveUniformGrid>
          {products.map((product) => (
            <CardActionArea
              key={product.id}
              href={routes.singleProduct(product.id)}
            >
              <ProductCard product={product} />
            </CardActionArea>
          ))}
        </ResponsiveUniformGrid>
      </Container>
    </PageWrapper>
  );
};
