import { IRelease } from "../../lib/contracts";
import { GridContainer } from "../atoms/grid-container";
import { GridItem } from "../atoms/grid-item";
import { Reveal } from "../atoms/reveal-animation";
import { ReleaseArtworkCard } from "../molecules/release-card";
import Link from "next/link";

export const ReleaseCardGrid = (props: {
  releases: IRelease[];
  onClick?: (release: IRelease, index: number) => void;
}) => {
  const { releases, onClick } = props;

  return (
    <GridContainer>
      {releases.map((release, index) => (
        <Link href={`/music/${release.slug}`} key={release.slug}>
          <GridItem
            layoutId={release.slug}
            onClick={() => {
              onClick?.(release, index);
            }}
            clickable
          >
            <Reveal>
              <ReleaseArtworkCard release={release} />
            </Reveal>
          </GridItem>
        </Link>
      ))}
    </GridContainer>
  );
};
