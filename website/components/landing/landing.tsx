import { CollectionThumbnail, Image, UniformGrid } from "@components/generic";
import { CardLayoutHeadline, PageWrapper } from "@components/shared";
import { LABELS, ROUTES, STATIC_IMAGES } from "@config";
import {
  IEvent,
  IImageGallery,
  IProduct,
  IRelease,
  ISettings,
  IVideoGallery,
} from "@data-access";
import Box from "@material-ui/core/Box";
import { purple } from "@material-ui/core/colors";
import React from "react";

export type ILandingProps = {
  settings: ISettings;
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
      background={<CollectionThumbnail aspectRatio={1} srcs={srcs} />}
      title={LABELS.release}
    />
  );
};

const CommerceCard = ({ srcs }: { srcs: string[] }) => {
  return (
    <CardLayoutHeadline
      href={ROUTES.commerce()}
      background={
        <Box sx={{ backgroundColor: purple[500] }}>
          <CollectionThumbnail aspectRatio={1} srcs={srcs} />
        </Box>
      }
      title={LABELS.commerce}
    />
  );
};

const EventsCard = () => {
  return (
    <CardLayoutHeadline
      href={ROUTES.allEvents()}
      background={
        <Image alt="See Events" aspectRatio={1} src={STATIC_IMAGES.events} />
      }
      title={LABELS.event}
    />
  );
};

const VideoGalleriesCard = ({ srcs }: { srcs: string[] }) => {
  return (
    <CardLayoutHeadline
      href={ROUTES.allVideoGalleries()}
      background={<CollectionThumbnail aspectRatio={1} srcs={srcs} />}
      title={LABELS.videoGallery}
    />
  );
};

const ImageGalleriesCard = ({ srcs }: { srcs: string[] }) => {
  return (
    <CardLayoutHeadline
      href={ROUTES.allImageGalleries()}
      background={<CollectionThumbnail aspectRatio={1} srcs={srcs} />}
      title={LABELS.imageGallery}
    />
  );
};

export const Landing = ({
  products,
  videoGalleries,
  imageGalleries,
  releases,
  settings,
}: ILandingProps) => {
  return (
    <PageWrapper pageTitle={["Official Site"]} settings={settings}>
      <UniformGrid ItemProps={{ xs: 12, sm: 6 }}>
        <ReleasesCard srcs={releases.map((release) => release.artwork)} />

        <UniformGrid ItemProps={{ xs: 6 }}>
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
