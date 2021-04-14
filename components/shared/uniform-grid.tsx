import { Theme, useMediaQuery } from "@material-ui/core";
import Grid, { GridProps } from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import React from "react";

type IUniformGridProps = React.PropsWithChildren<{
  ContainerProps?: GridProps;
  ItemProps?: GridProps;
}>;

export const UniformGrid = ({
  ContainerProps,
  ItemProps,
  children,
}: IUniformGridProps) => {
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

/* 

component rational: 
  a single column <UniformGrid /> with spacing > 0 and full screen width 
  was causing horizontal scroll 

*/

export const ResponsiveUniformGrid = (props: IUniformGridProps) => {
  const isSmallScreen = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("xs")
  );

  if (isSmallScreen) {
    return (
      <Box display="flex" flexDirection="column">
        {React.Children.map(props.children, (child) => (
          <Box width="100%" paddingBottom={1}>
            {child}
          </Box>
        ))}
      </Box>
    );
  }

  return <UniformGrid {...props} />;
};
