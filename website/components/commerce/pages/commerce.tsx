import { UniformGrid } from "@components/generic";
import { PageHeader, PageWrapper } from "@components/shared";
import { LABELS, ROUTES } from "@config";
import { IProduct, ISettings } from "@data-access";
import React from "react";
import { ProductCard } from "../cards/product-card";

export type ICommerceProps = {
  settings: ISettings;
  products: IProduct[];
};

export const CommercePage = (props: ICommerceProps) => {
  const { settings, products } = props;

  return (
    <PageWrapper pageTitle={[LABELS.commerce]} settings={settings}>
      <PageHeader
        breadcrumbs={[
          {
            href: ROUTES.home(),
            label: LABELS.home,
          },
          {
            label: LABELS.commerce,
          },
        ]}
        title={LABELS.commerce}
      />

      <UniformGrid ItemProps={{ xs: 6, lg: 3 }}>
        {products.map((product) => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </UniformGrid>
    </PageWrapper>
  );
};
