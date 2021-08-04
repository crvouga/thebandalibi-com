import { CollectionThumbnail, Image } from "@components/generic";
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
import Grid from "@material-ui/core/Grid";
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
      <Grid container>
        <Grid item xs={12} sm={6}>
          <ReleasesCard srcs={releases.map((release) => release.artwork)} />
        </Grid>

        <Grid item container xs={12} sm={6}>
          <Grid item xs={12} sm={6}>
            <CommerceCard
              srcs={products.map((product) => product.images[0].src)}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <EventsCard />
          </Grid>

          <Grid item xs={12} sm={6}>
            <VideoGalleriesCard
              srcs={videoGalleries.map(
                (videoGallery) => videoGallery.thumbnail.url
              )}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <ImageGalleriesCard
              srcs={imageGalleries.map(
                (imageGallery) => imageGallery.thumbnail.url
              )}
            />
          </Grid>
        </Grid>
      </Grid>
    </PageWrapper>
  );
};
