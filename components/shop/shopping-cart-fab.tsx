import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";
import { MdShoppingCart } from "react-icons/md";
import { NAV_BAR_HEIGHT } from "../top-level/navigation-constants";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    right: theme.spacing(2),
    bottom: `calc(2 * ${NAV_BAR_HEIGHT} + ${theme.spacing(2)}px)`,
    zIndex: theme.zIndex.appBar,
  },
  icon: {
    width: "24px",
    height: "24px",
  },
}));

export const ShoppingCardFab = () => {
  const classes = useStyles();

  return (
    <Fab className={classes.root}>
      <MdShoppingCart className={classes.icon} />
    </Fab>
  );
};
