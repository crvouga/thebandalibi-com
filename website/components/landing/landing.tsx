import { ProductCard } from "@components/commerce";
import { Button, UniformGrid } from "@components/generic";
import {
  IImageGallery,
  IProduct,
  ISettings,
  IVideo,
  toClosestPlatform,
} from "@data-access";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { createEventEmitter } from "@utility";
import React, { useRef } from "react";
import {
  ImageGalleryCard,
  IVideoPlayerEvents,
  VideoPlayerCard,
} from "../content";
import { PageWrapper, routes } from "../shared";
import { Hero } from "./hero";
import Link from "next/link";

const MerchSection = ({ products }: { products: IProduct[] }) => {
  const href = routes.store();

  return (
    <Container disableGutters sx={{ paddingY: 2 }}>
      <Link href={href}>
        <Typography variant="h2" align="center">
          Merch
        </Typography>
      </Link>

      <UniformGrid ItemProps={{ xs: 6, sm: 3, md: 3 }}>
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </UniformGrid>

      <Container maxWidth="xs" sx={{ marginTop: 1 }}>
        <Button
          href={href}
          fullWidth
          size="large"
          color="secondary"
          variant="contained"
        >
          Shop Merch
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
  const href = routes.allImageGalleries();

  return (
    <Container disableGutters sx={{ paddingY: 2 }}>
      <Link href={href}>
        <Typography variant="h2" align="center">
          Photos
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

      <Container maxWidth="xs" sx={{ marginTop: 1 }}>
        <Button
          href={href}
          fullWidth
          size="large"
          color="secondary"
          variant="contained"
        >
          View Photos
        </Button>
      </Container>
    </Container>
  );
};

const VideoSection = ({ href, videos }: { href: string; videos: IVideo[] }) => {
  const videoPlayerEventEmitterRef = useRef(
    createEventEmitter<IVideoPlayerEvents>({
      maxListeners: 100,
    })
  );

  return (
    <Container disableGutters sx={{ paddingY: 2 }}>
      <Link href={href}>
        <Typography variant="h2" align="center">
          Videos
        </Typography>
      </Link>

      <UniformGrid>
        {videos.slice(0, 3).map((video) => (
          <VideoPlayerCard
            key={video.url}
            eventEmitter={videoPlayerEventEmitterRef.current}
            video={video}
          />
        ))}
      </UniformGrid>

      <Container maxWidth="xs" sx={{ marginTop: 1 }}>
        <Button
          href={href}
          fullWidth
          size="large"
          color="secondary"
          variant="contained"
        >
          Watch Videos
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

  const youtubeLink = toClosestPlatform("youtube", settings.band.platformLinks);

  return (
    <PageWrapper pageTitle={["Official Site"]} settings={settings}>
      <Hero hero={settings.landingPage.heros[0]} />

      <MerchSection products={products} />

      <ImageGallerySection
        imageGalleries={settings.landingPage.imageGalleries}
      />

      <VideoSection
        href={youtubeLink.url}
        videos={settings.landingPage.videos}
      />
    </PageWrapper>
  );
};
