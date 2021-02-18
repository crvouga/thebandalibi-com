import ButtonBase, { ButtonBaseProps } from "@material-ui/core/ButtonBase";
import { makeStyles } from "@material-ui/core/styles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import clsx from "clsx";
import React from "react";

const useStyles = makeStyles((theme) => ({
  scrollIcon: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },

  scrollButton: {
    zIndex: 2,
    position: "absolute",
    top: 0,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  scrollLeft: {
    left: 0,
  },

  scrollRight: {
    right: 0,
  },
}));

export const ScrollLeftButton = (props: ButtonBaseProps) => {
  const classes = useStyles();
  return (
    <ButtonBase
      className={clsx(classes.scrollButton, classes.scrollLeft)}
      {...props}
    >
      <ChevronLeftIcon className={classes.scrollIcon} />
    </ButtonBase>
  );
};

export const ScrollRightButton = (props: ButtonBaseProps) => {
  const classes = useStyles();
  return (
    <ButtonBase
      className={clsx(classes.scrollButton, classes.scrollRight)}
      {...props}
    >
      <ChevronRightIcon className={classes.scrollIcon} />
    </ButtonBase>
  );
};
