import { GetStaticPaths, GetStaticProps } from "next";
import {
  IReleaseSingleProps,
  ReleaseSingle,
} from "../../components/content/pages/release.single";
import { content } from "@data-access";

export const getStaticPaths: GetStaticPaths = async () => {
  const releases = await content.release.getAll();

  const paths = releases.map((release) => ({
    params: {
      slug: release.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IReleaseSingleProps> = async (
  context
) => {
  const slug = context?.params?.slug?.toString();

  if (!slug) {
    return {
      notFound: true,
    };
  }

  const release = await content.release.getOne(slug);

  if (!release) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      settings: await content.settings.get(),
      release,
    },
  };
};

export default ReleaseSingle;
