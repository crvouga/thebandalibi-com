import Typography from "@material-ui/core/Typography";
import React from "react";
import { routes } from "../../constants/routes";
import { IVideoGallery } from "../../lib/domain";
import { Meta } from "../app/meta";
import { IPageLayoutProps, PageLayout } from "../app/page-layout";
import { ClickableLink } from "../@shared/clickable";
import { Container } from "../@shared/container";
import { Header } from "../@shared/header";
import { ItemGrid } from "../@shared/item-grid";
import { VideoGalleryCard } from "../video/video-gallery-card";
import { Reveal } from "../@shared/reveal-animation";

export type IVideoGalleryProps = IPageLayoutProps & {
  videoGalleries: IVideoGallery[];
};

export const VideoGallery = (props: IVideoGalleryProps) => {
  const { videoGalleries, ...PageLayoutProps } = props;

  return (
    <PageLayout {...PageLayoutProps}>
      <Container>
        <Meta />

        <Header>
          <Typography variant="h3">Videos</Typography>
        </Header>

        <ItemGrid
          items={videoGalleries}
          getItemKey={(videoGallery) => videoGallery.slug}
          renderItem={(videoGallery) => (
            <ClickableLink href={routes.singleVideoGallery(videoGallery.slug)}>
              <Reveal>
                <VideoGalleryCard videoGallery={videoGallery} />
              </Reveal>
            </ClickableLink>
          )}
        />
      </Container>
    </PageLayout>
  );
};
