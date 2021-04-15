import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { useState } from "react";
import { Cart } from "./cart";
import { Delivery } from "./delivery";
import { Overview } from "./overview";
import { Payment } from "./payment";
import { Auth } from "./auth";

type ICheckoutWizardStep =
  | "cart"
  | "delivery"
  | "payment"
  | "overview"
  | "auth";

const SwitchStep = ({ step }: { step: ICheckoutWizardStep }) => {
  switch (step) {
    case "cart":
      return <Cart />;

    case "auth":
      return <Auth />;

    case "delivery":
      return <Delivery />;

    case "payment":
      return <Payment />;

    case "overview":
      return <Overview />;

    default:
      throw new Error(`Invalid step: ${step}`);
  }
};

const CHECKOUT_WIZARD_STEP_ORDER: ICheckoutWizardStep[] = [
  "cart",
  "auth",
  "delivery",
  "payment",
  "overview",
];

const getIndexClamped = <T,>(index: number, xs: T[]) => {
  return xs[Math.min(xs.length - 1, Math.max(0, index))];
};

const toNextStep = (step: ICheckoutWizardStep): ICheckoutWizardStep => {
  return getIndexClamped(
    CHECKOUT_WIZARD_STEP_ORDER.indexOf(step) + 1,
    CHECKOUT_WIZARD_STEP_ORDER
  );
};

const toPreviousStep = (step: ICheckoutWizardStep): ICheckoutWizardStep => {
  return getIndexClamped(
    CHECKOUT_WIZARD_STEP_ORDER.indexOf(step) - 1,
    CHECKOUT_WIZARD_STEP_ORDER
  );
};

export const CheckoutWizard = () => {
  const [step, setStep] = useState<ICheckoutWizardStep>("cart");

  return (
    <Box paddingY={2}>
      <SwitchStep step={step} />

      <Button
        size="large"
        disabled={CHECKOUT_WIZARD_STEP_ORDER.indexOf(step) === 0}
        onClick={() => {
          setStep(toPreviousStep);
        }}
      >
        Back
      </Button>

      <Button
        size="large"
        disabled={
          CHECKOUT_WIZARD_STEP_ORDER.indexOf(step) ===
          CHECKOUT_WIZARD_STEP_ORDER.length - 1
        }
        onClick={() => {
          setStep(toNextStep);
        }}
      >
        Next
      </Button>
    </Box>
  );
};
