import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { IController } from "./contracts";
import { ScrollLeftButton, ScrollRightButton } from "./scroll-buttons";

export type IHorizontalSnapScrollProps = React.PropsWithChildren<{
  controller: IController;
}>;

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
  },

  container: {
    display: "flex",
    flexWrap: "nowrap",

    scrollSnapType: "x mandatory",
  },

  wrapper: {
    scrollSnapAlign: "start",
  },
}));

export const HorizontalSnapScroll = (props: IHorizontalSnapScrollProps) => {
  const { children, controller } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fade in={controller.canScrollLeft}>
        <ScrollLeftButton onClick={controller.scrollLeft} />
      </Fade>

      <div className={classes.container} ref={controller.ref}>
        {React.Children.map(children, (child) => (
          <div className={classes.wrapper}>{child}</div>
        ))}
      </div>

      <Fade in={controller.canScrollRight}>
        <ScrollRightButton onClick={controller.scrollRight} />
      </Fade>
    </div>
  );
};
