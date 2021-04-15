import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { useState } from "react";
import { Cart } from "./cart";
import { Delivery } from "./delivery";
import { Overview } from "./overview";
import { Payment } from "./payment";

type ICheckoutWizardStep = "cart" | "delivery" | "payment" | "overview";

const SwitchStep = ({ step }: { step: ICheckoutWizardStep }) => {
  switch (step) {
    case "cart":
      return <Cart />;
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
  "delivery",
  "payment",
  "overview",
];

const toNextStep = (step: ICheckoutWizardStep) => {
  return CHECKOUT_WIZARD_STEP_ORDER[
    Math.min(
      CHECKOUT_WIZARD_STEP_ORDER.length - 1,
      Math.max(0, CHECKOUT_WIZARD_STEP_ORDER.indexOf(step) + 1)
    )
  ];
};

const toPreviousStep = (step: ICheckoutWizardStep) => {
  return CHECKOUT_WIZARD_STEP_ORDER[
    Math.min(
      CHECKOUT_WIZARD_STEP_ORDER.length - 1,
      Math.max(0, CHECKOUT_WIZARD_STEP_ORDER.indexOf(step) - 1)
    )
  ];
};

export const CheckoutWizard = () => {
  const [step, setStep] = useState<ICheckoutWizardStep>("cart");

  return (
    <Box>
      <SwitchStep step={step} />

      <Button
        onClick={() => {
          setStep(toPreviousStep);
        }}
      >
        Back
      </Button>

      <Button
        onClick={() => {
          setStep(toNextStep);
        }}
      >
        Next
      </Button>
    </Box>
  );
};
