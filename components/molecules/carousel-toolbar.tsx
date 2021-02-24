import { Button, ButtonGroup, Toolbar } from "@material-ui/core";
import React from "react";

export const CarouselToolbar = ({
  onClose,
  onNext,
  onPrevious,
}: {
  onNext: () => void;
  onPrevious: () => void;
  onClose: () => void;
}) => {
  return (
    <Toolbar>
      <ButtonGroup fullWidth size="large" orientation="horizontal">
        <Button onClick={onPrevious}>Previous</Button>
        <Button onClick={onClose}>Close</Button>
        <Button onClick={onNext}>Next</Button>
      </ButtonGroup>
    </Toolbar>
  );
};
