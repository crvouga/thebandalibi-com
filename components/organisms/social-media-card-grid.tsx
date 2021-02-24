import Link from "next/link";
import { ISocialMedia } from "../../lib/contracts";
import { GridContainer } from "../atoms/grid-container";
import { GridItem } from "../atoms/grid-item";
import { Reveal } from "../atoms/reveal-animation";
import { SocialMediaCard } from "../molecules/social-media-card";

export const SocialMediaCardGrid = (props: { socialMedia: ISocialMedia[] }) => {
  const { socialMedia } = props;

  return (
    <GridContainer>
      {socialMedia.map((socialMedia) => (
        <Link key={socialMedia.url} href={socialMedia.url}>
          <GridItem clickable>
            <Reveal>
              <SocialMediaCard socialMedia={socialMedia} />
            </Reveal>
          </GridItem>
        </Link>
      ))}
    </GridContainer>
  );
};
