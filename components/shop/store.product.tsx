import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { ISettings } from "../../lib/data-access";
import { IProduct } from "../../lib/data-access/product";
import { PageLayout } from "../app/layout";

export type IProductProps = {
  settings: ISettings;
  products: IProduct[];
};

export const Product = (props: IProductProps) => {
  const { settings } = props;

  return (
    <PageLayout
      pageTitle={[settings.band.name, "Store", "Products"]}
      settings={settings}
    >
      <Container>
        <Box paddingY={2}>
          <Typography variant="h1">Products</Typography>
        </Box>
      </Container>
    </PageLayout>
  );
};
