import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import { ISocialMedia } from "../../lib/contracts";

type ISocialMediaIconButtonProps = {
  socialMedia: ISocialMedia;
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
}));

export const SocialMediaIconButton = (props: ISocialMediaIconButtonProps) => {
  const { socialMedia } = props;
  const classes = useStyles();
  return (
    <IconButton
      aria-label={`${socialMedia.name} the band alibi`}
      className={classes.root}
      href={socialMedia.url}
    >
      <Icon>
        <Image
          alt={`${socialMedia.name} the band alibi`}
          layout="fill"
          src={socialMedia.image}
        />
      </Icon>
    </IconButton>
  );
};
