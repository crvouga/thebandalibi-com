import { ISocialMedia } from "../lib/contracts";
import Image from "next/image";
import IconButton from "@material-ui/core/IconButton";
import SvgIcon from "@material-ui/core/SvgIcon";
import { Icon, Box, Toolbar } from "@material-ui/core";

type ISocialMediaProps = {
  socialMedia: ISocialMedia[];
};

export const SocialMedia = (props: ISocialMediaProps) => {
  const { socialMedia } = props;
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      {socialMedia.map((socialMedia) => (
        <Box marginX={1}>
          <IconButton href={socialMedia.url} key={socialMedia.url}>
            <Icon>
              <Image layout="fill" src={socialMedia.image} />
            </Icon>
          </IconButton>
        </Box>
      ))}
    </Box>
  );
};
