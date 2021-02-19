import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { motion } from "framer-motion";
import { ISocialMedia } from "../../lib/contracts";
import { SectionLayout } from "../layout/section-layout";
import { SocialMediaCard } from "./social-media-card";

type ISocialMediaProps = {
  socialMedia: ISocialMedia[];
};

export const SocialMediaSection = (props: ISocialMediaProps) => {
  const { socialMedia } = props;

  return (
    <SectionLayout>
      <Typography variant="h3" gutterBottom>
        Find Us Here
      </Typography>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
      >
        {socialMedia.map((socialMedia) => (
          <Box key={socialMedia.url} flex={1} padding={1 / 2}>
            <Link underline="none" href={socialMedia.url}>
              <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
                <SocialMediaCard socialMedia={socialMedia} />
              </motion.div>
            </Link>
          </Box>
        ))}
      </Box>
    </SectionLayout>
  );
};
