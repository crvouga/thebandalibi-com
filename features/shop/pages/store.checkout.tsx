import Container from "@material-ui/core/Container";
import React from "react";
import { ISettings } from "@data-access";
import { PageLayout } from "../../../components/app/layout";
import { CheckoutWizard } from "../checkout-wizard/checkout-wizard";

export type ICheckoutProps = {
  settings: ISettings;
};

export const Checkout = (props: ICheckoutProps) => {
  const { settings } = props;

  return (
    <PageLayout
      hideFooter
      pageTitle={["Store", "Checkout"]}
      settings={settings}
    >
      <Container maxWidth="sm">
        <CheckoutWizard />
      </Container>
    </PageLayout>
  );
};
