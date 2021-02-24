import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import Image from "next/image";
import { ISocialMedia } from "../../lib/contracts";
import { SEO_KEYWORD } from "../molecules/meta";

export const SocialMediaButton = (props: { socialMedia: ISocialMedia }) => {
  const { socialMedia } = props;

  return (
    <IconButton
      aria-label={`${socialMedia.name} ${SEO_KEYWORD}`}
      href={socialMedia.url}
    >
      <Icon>
        <Image layout="fill" src={socialMedia.image} />
      </Icon>
    </IconButton>
  );
};
