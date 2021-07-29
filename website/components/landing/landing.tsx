import { indexToBackgroundColor, ProductCard } from "@components/commerce";
import { Button, UniformGrid } from "@components/generic";
import { CALL_TO_ACTIONS, LABELS, ROUTES } from "@config";
import { IImageGallery, IProduct, ISettings, IVideo } from "@data-access";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { createEventEmitter } from "@utility";
import Link from "next/link";
import React, { useRef } from "react";
import { ImageGalleryCard, IVideoPlayerEvents, VideoPlayer } from "../content";
import { PageWrapper } from "@components/shared";
import { Hero } from "./hero";
import { VideoCard } from "../content/cards/video-card";
import { VideoPlayerCard } from "@components/content/cards/video-player-card";

const CommerceSection = ({ products }: { products: IProduct[] }) => {
  const href = ROUTES.commerce();

  return (
    <Container disableGutters sx={{ paddingY: 2 }}>
      <Link href={href}>
        <Typography variant="h2" align="center">
          {LABELS.commerce}
        </Typography>
      </Link>

      <UniformGrid ItemProps={{ xs: 6, sm: 3 }}>
        {products.slice(0, 4).map((product, index) => (
          <ProductCard
            backgroundColor={indexToBackgroundColor(index)}
            key={product.productId}
            product={product}
          />
        ))}
      </UniformGrid>

      <Container maxWidth="xs" sx={{ marginTop: 2 }}>
        <Button
          href={href}
          fullWidth
          size="large"
          color="primary"
          variant="contained"
        >
          {CALL_TO_ACTIONS.commerceLink}
        </Button>
      </Container>
    </Container>
  );
};

const ImageGallerySection = ({
  imageGalleries,
}: {
  imageGalleries: IImageGallery[];
}) => {
  const href = ROUTES.allImageGalleries();

  return (
    <Container disableGutters sx={{ paddingY: 2 }}>
      <Link href={href}>
        <Typography variant="h2" align="center">
          {LABELS.imageGallery}
        </Typography>
      </Link>

      <UniformGrid>
        {imageGalleries.slice(0, 3).map((imageGallery) => (
          <ImageGalleryCard
            key={imageGallery.slug}
            imageGallery={imageGallery}
          />
        ))}
      </UniformGrid>

      <Container maxWidth="xs" sx={{ marginTop: 2 }}>
        <Button
          href={href}
          fullWidth
          size="large"
          color="primary"
          variant="contained"
        >
          {CALL_TO_ACTIONS.imageGalleryLink}
        </Button>
      </Container>
    </Container>
  );
};

const VideoSection = ({ videos }: { videos: IVideo[] }) => {
  const href = ROUTES.allVideoGalleries();

  const videoPlayerEventEmitterRef = useRef(
    createEventEmitter<IVideoPlayerEvents>({
      maxListeners: 100,
    })
  );

  return (
    <Container disableGutters sx={{ paddingY: 2 }}>
      <Link href={href}>
        <Typography variant="h2" align="center">
          {LABELS.videoGallery}
        </Typography>
      </Link>

      <UniformGrid>
        {videos.slice(0, 3).map((video) => (
          <VideoPlayer
            key={video.url}
            eventEmitter={videoPlayerEventEmitterRef.current}
            video={video}
          />
        ))}
      </UniformGrid>

      <Container maxWidth="xs" sx={{ marginTop: 2 }}>
        <Button
          href={href}
          fullWidth
          size="large"
          color="primary"
          variant="contained"
        >
          {CALL_TO_ACTIONS.videoGalleryLink}
        </Button>
      </Container>
    </Container>
  );
};

export type ILandingProps = {
  settings: ISettings;

  products: IProduct[];
};

export const Landing = (props: ILandingProps) => {
  const { products, settings } = props;
  const href = ROUTES.allVideoGalleries();

  const videoPlayerEventEmitterRef = useRef(
    createEventEmitter<IVideoPlayerEvents>({
      maxListeners: 100,
    })
  );

  return (
    <PageWrapper pageTitle={["Official Site"]} settings={settings}>
      <Hero hero={settings.landingPage.heros[0]} />

      <UniformGrid ItemProps={{ xs: 6, sm: 3 }}>
        {products.slice(0, 4).map((product, index) => (
          <ProductCard
            backgroundColor={indexToBackgroundColor(index)}
            key={product.productId}
            product={product}
          />
        ))}
      </UniformGrid>

      <UniformGrid>
        {settings.landingPage.videos.slice(0, 3).map((video) => (
          <VideoPlayerCard
            key={video.url}
            eventEmitter={videoPlayerEventEmitterRef.current}
            video={video}
          />
        ))}
      </UniformGrid>

      <UniformGrid>
        {settings.landingPage.imageGalleries.slice(0, 3).map((imageGallery) => (
          <ImageGalleryCard
            key={imageGallery.slug}
            imageGallery={imageGallery}
          />
        ))}
      </UniformGrid>

      {/* <CommerceSection products={products} />
      <ImageGallerySection
        imageGalleries={settings.landingPage.imageGalleries}
      />
      <VideoSection videos={settings.landingPage.videos} /> */}
    </PageWrapper>
  );
};
