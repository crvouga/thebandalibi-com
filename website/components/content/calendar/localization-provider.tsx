import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import MuiLocalizationProvider from "@material-ui/lab/LocalizationProvider";
import React from "react";

export const LocalizationProvider: React.FC<{}> = ({ children }) => {
  return (
    <MuiLocalizationProvider dateAdapter={AdapterDateFns}>
      {children}
    </MuiLocalizationProvider>
  );
};
