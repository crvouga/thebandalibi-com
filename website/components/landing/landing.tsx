import {
  CardActionArea,
  CollectionThumbnail,
  Image,
} from "@components/generic";
import { CardLayoutHeadline, PageWrapper } from "@components/shared";
import { CALL_TO_ACTIONS, LABELS, ROUTES, STATIC_IMAGES } from "@config";
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
    <CardActionArea href={ROUTES.allReleases()}>
      <CardLayoutHeadline
        background={<CollectionThumbnail aspectRatio={1} srcs={srcs} />}
        title={LABELS.release}
        titleTypographyProps={{ variant: "h1" }}
        subtitle={CALL_TO_ACTIONS.releaseLink}
      />
    </CardActionArea>
  );
};

const CommerceCard = ({ srcs }: { srcs: string[] }) => {
  return (
    <CardActionArea href={ROUTES.commerce()}>
      <CardLayoutHeadline
        background={
          <Box sx={{ backgroundColor: purple[500] }}>
            <CollectionThumbnail aspectRatio={1} srcs={srcs} />
          </Box>
        }
        title={LABELS.commerce}
        subtitle={CALL_TO_ACTIONS.commerceLink}
      />
    </CardActionArea>
  );
};

const EventsCard = () => {
  return (
    <CardActionArea href={ROUTES.allEvents()}>
      <CardLayoutHeadline
        background={
          <Image alt="See Events" aspectRatio={1} src={STATIC_IMAGES.events} />
        }
        title={LABELS.event}
        subtitle={CALL_TO_ACTIONS.eventLink}
      />
    </CardActionArea>
  );
};

const VideoGalleriesCard = ({ srcs }: { srcs: string[] }) => {
  return (
    <CardActionArea href={ROUTES.allVideoGalleries()}>
      <CardLayoutHeadline
        background={<CollectionThumbnail aspectRatio={1} srcs={srcs} />}
        title={LABELS.videoGallery}
        subtitle={CALL_TO_ACTIONS.videoGalleryLink}
      />
    </CardActionArea>
  );
};

const ImageGalleriesCard = ({ srcs }: { srcs: string[] }) => {
  return (
    <CardActionArea href={ROUTES.allImageGalleries()}>
      <CardLayoutHeadline
        background={<CollectionThumbnail aspectRatio={1} srcs={srcs} />}
        title={LABELS.imageGallery}
        subtitle={CALL_TO_ACTIONS.imageGalleryLink}
      />
    </CardActionArea>
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
