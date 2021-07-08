import { Theme, useTheme } from "@material-ui/core";
import ButtonBase from "@material-ui/core/ButtonBase";
import MuiPagination, {
  PaginationRenderItemParams,
} from "@material-ui/core/Pagination";
import { GoPrimitiveDot } from "react-icons/go";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const renderPaginationDots = ({
  hideArrows = false,
  type,
  selected,
  disabled,
  onClick,
  theme,
}: PaginationRenderItemParams & {
  hideArrows?: boolean;
  theme: Theme;
}) => {
  const defaultIconProps = {
    style: {
      fontSize: "2em",
    },
  };

  const defaultButtonProps = {
    disabled: disabled,
    sx: {
      margin: theme.spacing(0, 1 / 4),
      borderRadius: "50%",
    },
    onClick: onClick,
  };

  switch (type) {
    case "page":
      return (
        <ButtonBase
          {...defaultButtonProps}
          sx={{
            color: selected
              ? theme.palette.action.active
              : theme.palette.action.focus,
          }}
        >
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
  const theme = useTheme();

  return (
    <MuiPagination
      variant="text"
      shape="rounded"
      page={page}
      count={count}
      onChange={(_, page) => {
        onChange(page);
      }}
      renderItem={(props) => {
        return renderPaginationDots({ ...props, hideArrows, theme });
      }}
    />
  );
};
