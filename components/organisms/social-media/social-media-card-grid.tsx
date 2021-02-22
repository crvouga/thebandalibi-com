import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { motion } from "framer-motion";
import { ISocialMedia } from "../../../lib/contracts";
import { SocialMediaCard } from "./social-media-card";
import { Reveal } from "../../molecules/reveal-animation";

export const SocialMediaCardGrid = (props: { socialMedia: ISocialMedia[] }) => {
  const { socialMedia } = props;

  return (
    <Grid container spacing={1}>
      {socialMedia.map((socialMedia) => (
        <Grid key={socialMedia.url} item xs>
          <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 0.95 }}>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              href={socialMedia.url}
            >
              <Reveal>
                <SocialMediaCard socialMedia={socialMedia} />
              </Reveal>
            </Link>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
};
