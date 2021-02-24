import { BottomNavigationAction, makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import Link from "next/link";
import { ISocialMedia } from "../../lib/contracts";
import { IconImage } from "../atoms/icon-image";
import { Clickable } from "../atoms/clickable";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
}));

export const SocialMediaActionBar = (props: {
  className?: string;
  socialMedia: ISocialMedia[];
}) => {
  const { socialMedia, className } = props;

  const classes = useStyles();

  return (
    <div className={clsx(className, classes.root)}>
      {socialMedia.map((socialMedia) => (
        <Link href={socialMedia.url}>
          <Clickable>
            <BottomNavigationAction
              icon={<IconImage src={socialMedia.image} />}
              showLabel
              label={
                <Typography variant="subtitle2" noWrap>
                  {socialMedia.name}
                </Typography>
              }
            />
          </Clickable>
        </Link>
      ))}
    </div>
  );
};
