import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import React from "react";
import { Container } from "../../components/atoms/container";
import { Header } from "../../components/atoms/header";
import { Meta } from "../../components/molecules/meta";
import {
  IPageLayoutProps,
  PageLayout,
} from "../../components/templates/layout.tsx/page-layout";
import { IVideoGallery } from "../../lib/contracts";
import { VideoGalleryCard } from "../molecules/video-gallery-card";
import { ItemGrid } from "../organisms/item-grid";
import { Clickable } from "../atoms/clickable";

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
          <Typography variant="h3">Video Gallery</Typography>
        </Header>

        <ItemGrid
          items={videoGalleries}
          getItemKey={(videoGallery) => videoGallery.slug}
          renderItem={(videoGallery) => (
            <Link href={`/video/${videoGallery.slug}`}>
              <Clickable>
                <VideoGalleryCard videoGallery={videoGallery} />
              </Clickable>
            </Link>
          )}
        />
      </Container>
    </PageLayout>
  );
};
