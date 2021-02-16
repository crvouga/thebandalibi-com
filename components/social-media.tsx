import { ISocialMedia } from "../lib/contracts";

type ISocialMediaProps = {
  socialMedia: ISocialMedia[];
};

export const SocialMedia = (props: ISocialMediaProps) => {
  const { socialMedia } = props;
  return (
    <div>
      {socialMedia.map((socialMedia) => {
        return <div>{JSON.stringify(socialMedia, null, 2)}</div>;
      })}
    </div>
  );
};
