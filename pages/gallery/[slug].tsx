import Typography from "@material-ui/core/Typography";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { Container } from "../../components/atoms/container";
import { Header } from "../../components/atoms/header";
import { Meta } from "../../components/molecules/meta";
import { ImageCardGrid } from "../../components/organisms/image-card-grid";
import { PageLayout } from "../../components/templates/layout.tsx/page-layout";
import { cms } from "../../lib/cms";
import { IGallery, ISocialMedia } from "../../lib/contracts";
import { useRouter } from "next/router";
import { ImageView } from "../../components/organisms/image-view";

type IGalleryProps = {
  gallery: IGallery;
  socialMedia: ISocialMedia[];
};

export const getStaticPaths: GetStaticPaths = async () => {
  const galleries = await cms.getGalleries();

  const paths = galleries.map((gallery) => ({
    params: {
      slug: gallery.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IGalleryProps> = async (
  context
) => {
  const slug = context?.params?.slug?.toString() ?? "";

  const gallery = await cms.getGallery(slug);

  if (gallery) {
    return {
      props: {
        socialMedia: await cms.getSocialMedia(),
        gallery,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
};

const Gallery = (props: IGalleryProps) => {
  const { gallery, socialMedia } = props;

  const router = useRouter();

  if (router.query.image) {
    return <ImageView image={router.query.image} />;
  }

  return (
    <PageLayout socialMedia={socialMedia}>
      <Container layoutId={gallery.slug}>
        <Meta />

        <Header>
          <div>
            <Typography variant="h3">{gallery.name}</Typography>

            <Typography variant="subtitle1">
              {`${gallery.images.length} Photos`}
            </Typography>
          </div>
        </Header>

        <ImageCardGrid images={gallery.images} />
      </Container>
    </PageLayout>
  );
};

export default Gallery;
