import { BottomNavigationAction, makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import Link from "next/link";
import { IPlatform } from "../../lib/domain";
import { Clickable } from "../@shared/clickable";
import { PlatformAvatar } from "./platform-avatar";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
}));

export const PlatformActionBar = (props: {
  className?: string;
  platforms: IPlatform[];
}) => {
  const { platforms, className } = props;

  const classes = useStyles();

  return (
    <div className={clsx(className, classes.root)}>
      {platforms.map((platform) => (
        <Link key={platform.url} href={platform.url}>
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
