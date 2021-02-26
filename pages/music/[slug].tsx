import { GetStaticPaths, GetStaticProps } from "next";
import {
  IReleaseSingleProps,
  ReleaseSingle,
} from "../../components/templates/release.single";
import { cms } from "../../lib/cms";

export const getStaticPaths: GetStaticPaths = async () => {
  const releases = await cms.getReleases();

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
  const slug = context?.params?.slug?.toString() ?? "";

  const release = await cms.getSingleRelease(slug);

  if (release) {
    return {
      props: {
        platforms: await cms.getPlatforms(),
        release,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
};

export default ReleaseSingle;
