import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { ISettings } from "../../lib/data-access";
import { PageLayout } from "../app/layout";
import { formatTitle } from "../app/meta";

export type ICheckoutProps = {
  settings: ISettings;
};

export const Checkout = (props: ICheckoutProps) => {
  const { settings } = props;

  return (
    <PageLayout
      title={formatTitle(settings.band.name, "Store", "Checkout")}
      settings={settings}
      hideFooter
    >
      <Container>
        <Box paddingY={2}>
          <Typography variant="h1">Checkout</Typography>
        </Box>
      </Container>
    </PageLayout>
  );
};
