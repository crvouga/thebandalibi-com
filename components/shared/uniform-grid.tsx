import Grid, { GridProps } from "@material-ui/core/Grid";
import React from "react";

export const UniformGrid = ({
  ContainerProps,
  ItemProps,
  children,
}: React.PropsWithChildren<{
  ContainerProps?: GridProps;
  ItemProps?: GridProps;
}>) => {
  return (
    <Grid container spacing={1} {...ContainerProps}>
      {React.Children.map(children, (child) => (
        <Grid item xs={12} sm={6} md={4} {...ItemProps}>
          {child}
        </Grid>
      ))}
    </Grid>
  );
};
