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
import {
  ImageGalleriesCard,
  ImageGalleryCard,
  ReleaseCard,
  ReleasesCard,
  VideoGalleriesCard,
  VideoGalleryCard,
} from "../cards";

export type IMediaProps = {
  settings: ISettings;
  releases: IRelease[];
  imageGalleries: IImageGallery[];
  videoGalleries: IVideoGallery[];
};

export const Section = ({
  title,
  action,
  content,
}: {
  title: string;
  action: {
    href: string;
    label: string;
  };
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
        <Link href={action.href}>
          <Typography variant="h2">{title}</Typography>
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
      action: {
        href: routes.allReleases(),
        label: `See All`,
      },
      content: (
        <UniformGrid>
          {releases.slice(0, 3).map((release) => (
            <ReleaseCard key={release.slug} release={release} />
          ))}
          <ReleasesCard releases={releases} />
        </UniformGrid>
      ),
    },
    {
      title: "Videos",
      action: {
        href: routes.allVideoGalleries(),
        label: `See All`,
      },
      content: (
        <UniformGrid>
          {videoGalleries.slice(0, 2).map((videoGallery) => (
            <VideoGalleryCard
              key={videoGallery.slug}
              videoGallery={videoGallery}
            />
          ))}
          <VideoGalleriesCard videoGalleries={videoGalleries} />
        </UniformGrid>
      ),
    },
    {
      title: "Photos",
      action: {
        href: routes.allImageGalleries(),
        label: `See All`,
      },
      content: (
        <UniformGrid>
          {imageGalleries.slice(0, 2).map((imageGallery) => (
            <ImageGalleryCard
              key={imageGallery.slug}
              imageGallery={imageGallery}
            />
          ))}
          <ImageGalleriesCard imageGalleries={imageGalleries} />
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
