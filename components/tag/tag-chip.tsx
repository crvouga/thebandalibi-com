import { Box, Chip, ChipProps, makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import { ITag } from "../../lib/data-access/tag";
import { BULLET_CHARACTER, abbreviateNumber } from "../../lib/utility";
import { Clickable } from "../shared/clickable";

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

export const TagChip = (props: ChipProps) => {
  if (props.clickable) {
    return (
      <Clickable>
        <Chip {...props} />
      </Clickable>
    );
  } else {
    return <Chip {...props} />;
  }
};

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
          <TagChip
            clickable={Boolean(onClick)}
            onClick={() => {
              onClick?.(tag);
            }}
            label={
              <Typography variant="subtitle1" color="initial">
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
