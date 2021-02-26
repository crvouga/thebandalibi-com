import { IPlatformLink } from "../../lib/contracts";
import { makeStyles } from "@material-ui/core";
import { PlatformLinkCard } from "../molecules/platform-link-card";
import { Reveal } from "../atoms/reveal-animation";

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
}: {
  platformLinks: IPlatformLink[];
}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
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
