import { UniformGrid } from "@components/generic";
import {
  IImageGallery,
  IRelease,
  ISettings,
  IVideoGallery,
} from "@data-access";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import React from "react";
import { PageWrapper, routes } from "../../shared";
import { ImageGalleryCard, ReleaseCard, VideoGalleryCard } from "../cards";

export type IMediaProps = {
  settings: ISettings;
  releases: IRelease[];
  imageGalleries: IImageGallery[];
  videoGalleries: IVideoGallery[];
};

export const Section = ({
  title,
  href,
  content,
}: {
  title: string;
  href: string;
  content: React.ReactChild;
}) => {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        marginBottom: 4,
      }}
    >
      <Container>
        <Link href={href}>
          <Typography sx={{ cursor: "pointer" }} variant="h2">
            {title}
          </Typography>
        </Link>
      </Container>

      <Container disableGutters>{content}</Container>
    </Box>
  );
};

export const Media = (props: IMediaProps) => {
  const { videoGalleries, imageGalleries, releases, settings } = props;

  const sections = [
    {
      title: "Releases",
      href: routes.allReleases(),
      content: (
        <UniformGrid>
          {releases.slice(0, 3).map((release) => (
            <ReleaseCard key={release.slug} release={release} />
          ))}
        </UniformGrid>
      ),
    },
    {
      title: "Videos",
      href: routes.allVideoGalleries(),
      content: (
        <UniformGrid>
          {videoGalleries.slice(0, 2).map((videoGallery) => (
            <VideoGalleryCard
              key={videoGallery.slug}
              videoGallery={videoGallery}
            />
          ))}
        </UniformGrid>
      ),
    },
    {
      title: "Photos",
      href: routes.allImageGalleries(),
      content: (
        <UniformGrid>
          {imageGalleries.slice(0, 2).map((imageGallery) => (
            <ImageGalleryCard
              key={imageGallery.slug}
              imageGallery={imageGallery}
            />
          ))}
        </UniformGrid>
      ),
    },
  ];

  return (
    <PageWrapper pageTitle={["Media"]} settings={settings}>
      <Box sx={{ paddingY: 2 }}>
        {sections.map((section, index) => (
          <Section key={index} {...section} />
        ))}
      </Box>
    </PageWrapper>
  );
};
