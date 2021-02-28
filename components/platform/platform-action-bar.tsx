import { BottomNavigationAction, makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import Link from "next/link";
import { IPlatformLink } from "../../lib/domain";
import { Clickable } from "../@shared/clickable";
import { PlatformAvatar } from "./platform-avatar";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
}));

export const PlatformLinkActionBar = (props: {
  className?: string;
  platformsLinks: IPlatformLink[];
}) => {
  const { platformsLinks, className } = props;

  const classes = useStyles();

  return (
    <div className={clsx(className, classes.root)}>
      {platformsLinks.map(({ platform, url }) => (
        <Link key={url} href={url}>
          <Clickable>
            <BottomNavigationAction
              icon={<PlatformAvatar platform={platform} />}
              showLabel
              label={<Typography noWrap>{platform.name}</Typography>}
            />
          </Clickable>
        </Link>
      ))}
    </div>
  );
};
