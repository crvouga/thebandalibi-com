import { Chip, ChipProps, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { ITag } from "../../lib/domain/tag";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    overflowX: "scroll",
    scrollSnapType: "x mandatory",
    maxWidth: "100%",
  },

  item: {
    scrollSnapAlign: "start",
    padding: theme.spacing(1 / 2),
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
            label={tag.name}
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
