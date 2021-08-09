import { CollectionThumbnail, Image, UniformGrid } from "@components/generic";
import { CardLayoutHeadline, PageWrapper } from "@components/shared";
import { CALL_TO_ACTIONS, LABELS, ROUTES, STATIC_IMAGES } from "@config";
import {
  IEvent,
  IImageGallery,
  ILandingPage,
  IProduct,
  IRelease,
  ISettings,
  IVideoGallery,
} from "@data-access";
import { useTheme } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import React from "react";
import { Hero } from "./hero";

export type IHomePageProps = {
  settings: ISettings;
  landingPage: ILandingPage;
  products: IProduct[];
  releases: IRelease[];
  videoGalleries: IVideoGallery[];
  imageGalleries: IImageGallery[];
  events: IEvent[];
};

const ReleasesCard = ({ srcs }: { srcs: string[] }) => {
  return (
    <CardLayoutHeadline
      href={ROUTES.allReleases()}
      background={<CollectionThumbnail priority aspectRatio={1} srcs={srcs} />}
      title={LABELS.release}
    />
  );
};

const CommerceCard = ({ srcs }: { srcs: string[] }) => {
  return (
    <CardLayoutHeadline
      href={ROUTES.commerce()}
      background={<CollectionThumbnail priority aspectRatio={1} srcs={srcs} />}
      title={LABELS.commerce}
    />
  );
};

const EventsCard = () => {
  return (
    <CardLayoutHeadline
      href={ROUTES.allEvents()}
      background={
        <Image
          priority
          alt="See Events"
          aspectRatio={1}
          src={STATIC_IMAGES.events}
        />
      }
      title={LABELS.event}
    />
  );
};

const VideoGalleriesCard = ({ srcs }: { srcs: string[] }) => {
  return (
    <CardLayoutHeadline
      href={ROUTES.allVideoGalleries()}
      background={<CollectionThumbnail priority aspectRatio={1} srcs={srcs} />}
      title={LABELS.videoGallery}
    />
  );
};

const ImageGalleriesCard = ({ srcs }: { srcs: string[] }) => {
  return (
    <CardLayoutHeadline
      href={ROUTES.allImageGalleries()}
      background={<CollectionThumbnail priority aspectRatio={1} srcs={srcs} />}
      title={LABELS.imageGallery}
    />
  );
};

export const HomePage = ({
  products,
  videoGalleries,
  imageGalleries,
  releases,
  settings,
  landingPage,
}: IHomePageProps) => {
  const theme = useTheme();
  const { hero } = landingPage;
  return (
    <PageWrapper
      pageTitle={["Home"]}
      settings={settings}
      logoHref={ROUTES.landing()}
    >
      <Hero
        logo={{
          src: hero.logo.url,
          alt: settings.band.name,
          aspectRatio: hero.logo.metadata.dimensions.aspectRatio,
        }}
        slideshowTimeout={5000}
        backgroundImages={hero.images.map((image) => ({
          src: image.url,
          alt: settings.band.name,
        }))}
        tagline={hero.subtitle}
        primaryAction={{
          label: CALL_TO_ACTIONS.releasesLink,
          href: ROUTES.allReleases(),
        }}
        secondaryAction={{
          label: CALL_TO_ACTIONS.commerceLink,
          href: ROUTES.commerce(),
        }}
      />

      <Divider />

      <UniformGrid
        ItemProps={{
          xs: 12,
          sm: 6,
        }}
      >
        <ReleasesCard srcs={releases.map((release) => release.artwork)} />

        <UniformGrid
          ItemProps={{
            xs: 6,
          }}
        >
          <CommerceCard
            srcs={products.map((product) => product.images[0].src)}
          />
          <EventsCard />
          <VideoGalleriesCard
            srcs={videoGalleries.map(
              (videoGallery) => videoGallery.thumbnail.url
            )}
          />
          <ImageGalleriesCard
            srcs={imageGalleries.map(
              (imageGallery) => imageGallery.thumbnail.url
            )}
          />
        </UniformGrid>
      </UniformGrid>
    </PageWrapper>
  );
};
