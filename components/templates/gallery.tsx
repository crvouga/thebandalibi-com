import Typography from "@material-ui/core/Typography";
import React from "react";
import { IGallery, IPlatform } from "../../lib/contracts";
import { ClickableLink } from "../atoms/clickable";
import { Container } from "../atoms/container";
import { Header } from "../atoms/header";
import { GalleryCard } from "../molecules/gallery-card";
import { Meta } from "../molecules/meta";
import { ItemGrid } from "../organisms/item-grid";
import { PageLayout } from "./layout.tsx/page-layout";

export type IGalleryProps = {
  platforms: IPlatform[];
  galleries: IGallery[];
};

export const Gallery = (props: IGalleryProps) => {
  const { galleries, platforms } = props;

  return (
    <PageLayout platforms={platforms}>
      <Container>
        <Meta />

        <Header>
          <Typography variant="h3" color="initial">
            Gallery
          </Typography>
        </Header>

        <ItemGrid
          items={galleries}
          getItemKey={(gallery) => gallery.slug}
          renderItem={(gallery) => (
            <ClickableLink href={`/gallery/${gallery.slug}`}>
              <GalleryCard gallery={gallery} />
            </ClickableLink>
          )}
        />
      </Container>
    </PageLayout>
  );
};
