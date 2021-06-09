import Container from "@material-ui/core/Container";
import React from "react";
import { ISettings } from "@data-access";
import { PageWrapper } from "../../top-level";
import { CheckoutWizard } from "../checkout-wizard/checkout-wizard";

export type ICheckoutProps = {
  settings: ISettings;
};

export const Checkout = (props: ICheckoutProps) => {
  const { settings } = props;

  return (
    <PageWrapper
      hideFooter
      pageTitle={["Store", "Checkout"]}
      settings={settings}
    >
      <Container maxWidth="sm">
        <CheckoutWizard />
      </Container>
    </PageWrapper>
  );
};
