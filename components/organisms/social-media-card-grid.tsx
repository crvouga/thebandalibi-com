import Link from "next/link";
import { ISocialMedia } from "../../lib/contracts";
import { GridContainer } from "../atoms/grid-container";
import { GridItem } from "../atoms/grid-item";
import { Reveal } from "../atoms/reveal-animation";
import { SocialMediaCard } from "../molecules/social-media-card";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pointer: {
    cursor: "pointer",
  },
}));

export const SocialMediaCardGrid = (props: { socialMedia: ISocialMedia[] }) => {
  const { socialMedia } = props;

  const classes = useStyles();

  return (
    <GridContainer>
      {socialMedia.map((socialMedia) => (
        <Link key={socialMedia.url} href={socialMedia.url}>
          <GridItem
            className={classes.pointer}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 0.95 }}
          >
            <Reveal>
              <SocialMediaCard socialMedia={socialMedia} />
            </Reveal>
          </GridItem>
        </Link>
      ))}
    </GridContainer>
  );
};
