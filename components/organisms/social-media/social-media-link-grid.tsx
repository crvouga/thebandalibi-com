import { SvgIcon } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import { motion } from "framer-motion";
import Image from "next/image";
import { ISocialMedia } from "../../../lib/contracts";

export const SocialMediaLinks = (props: { socialMedia: ISocialMedia[] }) => {
  const { socialMedia } = props;

  return (
    <Grid container spacing={1}>
      {socialMedia.map((socialMedia) => (
        <Grid key={socialMedia.url} item xs>
          <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 0.95 }}>
            <IconButton aria-label={socialMedia.name} href={socialMedia.url}>
              <SvgIcon>
                <Image layout="fill" src={socialMedia.image} />
              </SvgIcon>
            </IconButton>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
};
