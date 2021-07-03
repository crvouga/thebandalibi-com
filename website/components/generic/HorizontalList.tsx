import { makeStyles } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  horizontalList: {
    display: "flex",
    position: "relative",
    scrollbarColor: "white",
  },

  button: {
    zIndex: 2,
    position: "absolute",
    backgroundColor: theme.palette.background.default,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  horizontalListItemsWrapper: {
    display: "flex",
    flexDirection: "row",
    overflowX: "scroll",
    scrollSnapType: `x mandatory`,
  },

  horizontalListItem: {
    scrollSnapAlign: "start",
  },

  buttonLeft: {},

  buttonRight: {
    left: "auto",
    right: 0,
  },
}));

export const HorizontalListWithButtons = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const classes = useStyles();

  const handleScrollLeft = () => {};

  return (
    <div className={classes.horizontalList}>
      <div className={clsx(classes.button, classes.buttonLeft)}>
        <IconButton aria-label="scroll left" onClick={handleScrollLeft}>
          <MdChevronLeft />
        </IconButton>
      </div>

      <div className={classes.horizontalListItemsWrapper}>{children}</div>

      <div className={clsx(classes.button, classes.buttonRight)}>
        <IconButton aria-label="scroll right" onClick={handleScrollLeft}>
          <MdChevronRight />
        </IconButton>
      </div>
    </div>
  );
};

export const HorizontalList = ({ children }: React.PropsWithChildren<{}>) => {
  const classes = useStyles();

  return (
    <div className={classes.horizontalList}>
      <div className={classes.horizontalListItemsWrapper}>{children}</div>
    </div>
  );
};

export const HorizontalListItem = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const classes = useStyles();

  return <div className={classes.horizontalListItem}>{children}</div>;
};
