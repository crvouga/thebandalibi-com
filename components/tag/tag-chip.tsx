import { Chip, ChipProps, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { ITag } from "../../lib/domain/tag";
import { Clickable } from "../@shared/clickable";

const useStyles = makeStyles((theme) => ({
  item: {
    scrollSnapAlign: "start",
    paddingLeft: theme.spacing(1),
  },

  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: ({ wrap = false }: { wrap: boolean }) =>
      wrap ? "wrap" : "nowrap",
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
  wrap = false,
}: {
  wrap?: boolean;
  className?: string;
  tags: ITag[];
  onClick?: (tag: ITag) => void;
  selected?: ITag[];
  ChipProps?: ChipProps;
}) => {
  const classes = useStyles({ wrap });

  return (
    <div className={clsx(classes.container, className)}>
      {tags.map((tag, index) => (
        <div
          key={tag.slug}
          className={clsx(classes.item, {
            [classes.gutterLeft]: index === 0 && !wrap,
          })}
        >
          <TagChip
            clickable={Boolean(onClick)}
            onClick={() => {
              onClick?.(tag);
            }}
            label={`${tag.name}`}
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
