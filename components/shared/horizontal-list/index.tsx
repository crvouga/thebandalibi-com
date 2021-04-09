import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  horizontalList: {
    display: "flex",
    flexDirection: "row",
    overflowX: "scroll",
  },
}));

export const HorizontalList = ({
  children,
}: {
  children: React.ReactChildren;
}) => {
  const classes = useStyles();

  return <div className={classes.horizontalList}>{children}</div>;
};
