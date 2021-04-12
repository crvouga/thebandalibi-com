import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  horizontalList: {
    display: "flex",
    flexDirection: "row",
    overflowX: "scroll",
    scrollSnapType: `x mandatory`,
  },
  horizontalListItem: {
    scrollSnapAlign: "start",
  },
}));

export const HorizontalList = ({ children }: React.PropsWithChildren<{}>) => {
  const classes = useStyles();

  return <div className={classes.horizontalList}>{children}</div>;
};

export const HorizontalListItem = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const classes = useStyles();

  return <div className={classes.horizontalListItem}>{children}</div>;
};
