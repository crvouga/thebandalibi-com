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

  const releases = await cms.getReleases();

  const release = releases.find((release) => release.slug === slug);

  if (release) {
    return {
      props: {
        socialMedia: await cms.getSocialMedia(),
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
