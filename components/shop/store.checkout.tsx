import Container from "@material-ui/core/Container";
import React from "react";
import { ISettings } from "../../lib/data-access";
import { PageLayout } from "../app/layout";
import { formatTitle } from "../app/meta";
import { CheckoutWizard } from "./checkout-wizard/checkout-wizard";

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
      <Container maxWidth="sm">
        <CheckoutWizard />
      </Container>
    </PageLayout>
  );
};
