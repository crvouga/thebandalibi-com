import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { ISettings } from "../../lib/data-access";
import { IProduct } from "../../lib/data-access/product";
import { PageLayout } from "../app/layout";
import { formatTitle } from "../app/meta";

export type IShopProductProps = {
  settings: ISettings;
  products: IProduct[];
};

export const ShopProduct = (props: IShopProductProps) => {
  const { settings } = props;

  return (
    <PageLayout
      title={formatTitle(settings.band.name, "Shop", "Merch")}
      settings={settings}
    >
      <Container>
        <Box paddingY={2}>
          <Typography variant="h1">Merch</Typography>
        </Box>
      </Container>
    </PageLayout>
  );
};
