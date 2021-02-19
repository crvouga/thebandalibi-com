import { Box, Link, Typography, useTheme } from "@material-ui/core";
import { motion } from "framer-motion";
import { ISocialMedia } from "../../lib/contracts";
import { SectionLayout } from "../layout/section-layout";
import { SocialMediaCard } from "./social-media-card";

type ISocialMediaProps = {
  socialMedia: ISocialMedia[];
};

export const SocialMediaSection = (props: ISocialMediaProps) => {
  const { socialMedia } = props;

  const theme = useTheme();

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
        style={{ gap: theme.spacing(1) }}
      >
        {socialMedia.map((socialMedia) => (
          <Box key={socialMedia.url} flex={1} padding={1 / 8}>
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
