import Grid, { GridProps } from "@material-ui/core/Grid";
import { range } from "@utility";
import React from "react";

type IUniformGridProps = {
  ContainerProps?: GridProps;
  ItemProps?: GridProps;
  loading?: {
    isLoading: boolean;
    count: number;
    render: (index: number) => React.ReactNode;
  };
  children: React.ReactNode;
};

const BaseUniformGrid = ({
  children,
  ContainerProps,
  ItemProps,
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

export const UniformGrid = ({ loading, ...props }: IUniformGridProps) => {
  if (loading?.isLoading) {
    return (
      <BaseUniformGrid {...props}>
        {range(0, loading.count).map(loading.render)}
      </BaseUniformGrid>
    );
  }

  return <BaseUniformGrid {...props} />;
};
