import { ITag } from "@data-access";
import Box from "@material-ui/core/Box";
import Chip, { ChipProps } from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import { abbreviateNumber, BULLET_CHARACTER } from "../../utility";

const useStyles = makeStyles((theme) => ({
  item: {
    scrollSnapAlign: "start",
    padding: theme.spacing(1 / 2),
  },

  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    overflowX: "scroll",
    scrollSnapType: "x mandatory",
    scrollPadding: theme.spacing(0, 0, 0, 2),
    scrollMarginRight: theme.spacing(10),
  },

  gutterLeft: {
    paddingLeft: theme.spacing(3),
  },
}));

export const TagChipGroup = ({
  className,
  tags,
  selected,
  ChipProps,
  onClick,
}: {
  className?: string;
  tags: ITag[];
  onClick?: (tag: ITag) => void;
  selected?: ITag[];
  ChipProps?: ChipProps;
}) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.container, className)}>
      {tags.map((tag) => (
        <div key={tag.slug} className={classes.item}>
          <Chip
            clickable={Boolean(onClick)}
            onClick={() => {
              onClick?.(tag);
            }}
            label={
              <Typography variant="body1" color="initial">
                {`${tag.name}`}
                <Box component="span" color="text.secondary">
                  {` ${BULLET_CHARACTER} ${abbreviateNumber(tag.videoCount)}`}
                </Box>
              </Typography>
            }
            variant={
              selected?.some((selected) => selected.slug === tag.slug)
                ? "default"
                : "outlined"
            }
            {...ChipProps}
          />
        </div>
      ))}
    </div>
  );
};
