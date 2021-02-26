import Link from "next/link";
import { IPlatform } from "../../lib/contracts";
import { GridContainer } from "../atoms/grid-container";
import { GridItem } from "../atoms/grid-item";
import { Reveal } from "../atoms/reveal-animation";
import { PlatformCard } from "../molecules/platform-card";

export const PlatformCardGrid = (props: { platforms: IPlatform[] }) => {
  const { platforms } = props;

  return (
    <GridContainer>
      {platforms.map((platform) => (
        <Link key={platform.url} href={platform.url}>
          <GridItem clickable>
            <Reveal>
              <PlatformCard platform={platform} />
            </Reveal>
          </GridItem>
        </Link>
      ))}
    </GridContainer>
  );
};
