import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { IPlatformLink } from "../../lib/contracts";
import { Reveal } from "../atoms/reveal-animation";
import { PlatformLinkCard } from "../molecules/platform-link-card";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  item: {
    padding: theme.spacing(1, 0),
  },
}));

export const PlatformLinkCardList = ({
  platformLinks,
  className,
}: {
  platformLinks: IPlatformLink[];
  className?: string;
}) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.container, className)}>
      {platformLinks.map((platformLink) => (
        <div key={platformLink.url} className={classes.item}>
          <Reveal>
            <PlatformLinkCard platformLink={platformLink} />
          </Reveal>
        </div>
      ))}
    </div>
  );
};
