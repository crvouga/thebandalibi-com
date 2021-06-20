import { useEffect, useState } from "react";

export const useTimeoutSteps = ({
  stepCount,
  timeout,
}: {
  timeout: number;
  stepCount: number;
}) => {
  if (stepCount <= 1) {
    throw new Error("step count must be greater than or equal to 1");
  }

  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    let timeoutHandler: NodeJS.Timeout;

    const run = (currentStep: number) => {
      if (currentStep > stepCount) {
        return;
      }

      timeoutHandler = setTimeout(() => {
        setCurrentStep((currentStep) => {
          const nextStep = currentStep + 1;
          run(nextStep);
          return nextStep;
        });
      }, timeout);
    };

    run(currentStep);

    return () => {
      clearTimeout(timeoutHandler);
    };
  }, []);

  return currentStep;
};
