import { makeStyles } from "@material-ui/core";
import ButtonBase from "@material-ui/core/ButtonBase";
import MuiPagination, {
  PaginationRenderItemParams,
} from "@material-ui/lab/Pagination";
import clsx from "clsx";
export const Pagination = MuiPagination;

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "50%",
    width: theme.spacing(2),
    height: theme.spacing(2),
    backgroundColor: theme.palette.action.focus,
    margin: theme.spacing(0, 1 / 2),
  },
  selected: {
    backgroundColor: theme.palette.action.active,
  },
}));

const Dot = ({ selected, onClick }: PaginationRenderItemParams) => {
  const classes = useStyles();
  return (
    <ButtonBase
      onClick={onClick}
      className={clsx(classes.root, { [classes.selected]: selected })}
    />
  );
};

export const PaginationDots = (props: PaginationRenderItemParams) => {
  const { type } = props;

  switch (type) {
    case "page":
      return <Dot {...props} />;

    default:
      return null;
  }
};
