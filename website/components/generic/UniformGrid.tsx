import Grid, { GridProps } from "@material-ui/core/Grid";
import { range } from "@utility";
import React from "react";

export type IUniformGridProps = {
  ContainerProps?: GridProps;
  ItemProps?: GridProps;
  loading?: {
    isLoading: boolean;
    count: number;
    render: ({ index }: { index: number }) => JSX.Element;
  };
  children: React.ReactNode;
};

const BaseUniformGrid = ({
  children,
  ContainerProps,
  ItemProps,
}: IUniformGridProps) => {
  return (
    <Grid container spacing={0} {...ContainerProps}>
      {React.Children.map(children, (child) => (
        <Grid item xs={12} sm={6} md={4} {...ItemProps}>
          {child}
        </Grid>
      ))}
    </Grid>
  );
};

export const UniformGrid = ({ loading, ...props }: IUniformGridProps) => {
  if (loading?.isLoading) {
    return (
      <BaseUniformGrid {...props}>
        {range(0, loading.count).map((index) => (
          <loading.render key={index} index={index} />
        ))}
      </BaseUniformGrid>
    );
  }

  return <BaseUniformGrid {...props} />;
};
