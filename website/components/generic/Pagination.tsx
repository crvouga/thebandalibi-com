import { makeStyles } from "@material-ui/core";
import ButtonBase from "@material-ui/core/ButtonBase";
import MuiPagination, {
  PaginationRenderItemParams,
} from "@material-ui/lab/Pagination";
import clsx from "clsx";
import { GoPrimitiveDot } from "react-icons/go";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(0, 1 / 4),
    borderRadius: "50%",
  },

  icon: {
    color: theme.palette.text.secondary,
    fontSize: "2em",
  },

  page: {
    color: theme.palette.action.focus,
  },

  disabled: {
    color: theme.palette.action.disabled,
  },

  selected: {
    color: theme.palette.action.active,
  },
}));

const renderPaginationDots = ({
  hideArrows = false,
  type,
  selected,
  disabled,
  onClick,
  classes,
}: PaginationRenderItemParams & {
  hideArrows?: boolean;
  classes: ReturnType<typeof useStyles>;
}) => {
  const defaultIconProps = {
    className: clsx(
      classes.icon,
      {
        [classes.page]: type === "page",
      },
      {
        [classes.disabled]: disabled,
        [classes.selected]: selected,
      }
    ),
  };

  const defaultButtonProps = {
    disabled: disabled,
    className: classes.button,
    onClick: onClick,
  };

  switch (type) {
    case "page":
      return (
        <ButtonBase {...defaultButtonProps}>
          <GoPrimitiveDot {...defaultIconProps} />
        </ButtonBase>
      );

    case "previous":
      if (hideArrows) return null;

      return (
        <ButtonBase {...defaultButtonProps}>
          <MdChevronLeft {...defaultIconProps} />
        </ButtonBase>
      );

    case "next":
      if (hideArrows) return null;

      return (
        <ButtonBase {...defaultButtonProps}>
          <MdChevronRight {...defaultIconProps} />
        </ButtonBase>
      );

    default:
      return null;
  }
};

export const PaginationDots = ({
  page,
  count,
  onChange,
  hideArrows = false,
}: {
  hideArrows?: boolean;
  onChange: (page: number) => void;
  count: number;
  page: number;
}) => {
  const classes = useStyles();

  return (
    <MuiPagination
      variant="text"
      shape="rounded"
      page={page}
      count={count}
      onChange={(_, page) => onChange(page)}
      renderItem={(props) => {
        return renderPaginationDots({ ...props, hideArrows, classes });
      }}
    />
  );
};
