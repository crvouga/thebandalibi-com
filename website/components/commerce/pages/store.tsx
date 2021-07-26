import { Link, UniformGrid } from "@components/generic";
import { PageWrapper, routes } from "@components/shared";
import { IProduct, ISettings } from "@data-access";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { ProductCard } from "../cards/product-card";

export type IShopProps = {
  settings: ISettings;
  products: IProduct[];
};

export const Shop = (props: IShopProps) => {
  const { settings, products } = props;

  return (
    <PageWrapper pageTitle={["Shop"]} settings={settings}>
      <Container sx={{ paddingTop: 2 }}>
        <Breadcrumbs>
          <Link href={routes.landing()}>Home</Link>
        </Breadcrumbs>

        <Typography variant="h1">Shop</Typography>
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
