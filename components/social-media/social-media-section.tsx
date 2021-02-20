import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { motion } from "framer-motion";
import { ISocialMedia } from "../../lib/contracts";
import { SectionLayout, SectionTitle } from "../layout/section-layout";
import { SocialMediaCard } from "./social-media-card";

type ISocialMediaProps = {
  socialMedia: ISocialMedia[];
};

export const SocialMediaSection = (props: ISocialMediaProps) => {
  const { socialMedia } = props;

  return (
    <SectionLayout>
      <SectionTitle>Find Us Here</SectionTitle>
      <Grid container spacing={1}>
        {socialMedia.map((socialMedia) => (
          <Grid key={socialMedia.url} item xs>
            <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
              <Link underline="none" href={socialMedia.url}>
                <SocialMediaCard socialMedia={socialMedia} />
              </Link>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </SectionLayout>
  );
};
