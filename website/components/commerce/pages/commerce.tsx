import { Link, UniformGrid } from "@components/generic";
import { PageWrapper } from "@components/shared";
import { LABELS, ROUTES } from "@config";
import { IProduct, ISettings } from "@data-access";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { ProductCard, indexToBackgroundColor } from "../cards/product-card";

export type ICommerceProps = {
  settings: ISettings;
  products: IProduct[];
};

export const CommercePage = (props: ICommerceProps) => {
  const { settings, products } = props;

  return (
    <PageWrapper pageTitle={[LABELS.commerce]} settings={settings}>
      <Container sx={{ paddingTop: 2 }}>
        <Breadcrumbs>
          <Link href={ROUTES.landing()}>{LABELS.landingPage}</Link>
          <Link color="text.primary">{LABELS.commerce}</Link>
        </Breadcrumbs>

        <Typography variant="h1">{LABELS.commerce}</Typography>
      </Container>

      <Container disableGutters>
        <UniformGrid ItemProps={{ xs: 6, lg: 3 }}>
          {products.map((product, index) => (
            <ProductCard
              key={product.productId}
              backgroundColor={indexToBackgroundColor(index)}
              product={product}
            />
          ))}
        </UniformGrid>
      </Container>
    </PageWrapper>
  );
};
