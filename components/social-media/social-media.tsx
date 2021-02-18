import { Box } from "@material-ui/core";
import { ISocialMedia } from "../../lib/contracts";
import { SocialMediaIconButton } from "./social-media-icon-button";

type ISocialMediaProps = {
  socialMedia: ISocialMedia[];
};

export const SocialMedia = (props: ISocialMediaProps) => {
  const { socialMedia } = props;
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      {socialMedia.map((socialMedia) => (
        <Box key={socialMedia.url} marginX={1}>
          <SocialMediaIconButton socialMedia={socialMedia} />
        </Box>
      ))}
    </Box>
  );
};
